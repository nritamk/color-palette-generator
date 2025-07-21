import { useDispatch } from "react-redux";
import { bindColor, bindTempHex, lockColor } from "../store/store";
import { getColorInfo } from "../services/colorAPI";
import React, { useRef } from "react";
import lock from "../assets/lock.svg";
import unlock from "../assets/unlock.svg";
const Color = ({ color }) => {
  let abortController = useRef(null);

  const dispatch = useDispatch();

  const fetchColorInfo = async () => {
    if (abortController.current) abortController.current.abort();
    abortController.current = new AbortController();
    const api = getColorInfo(
      color?.tempHex?.replace("#", ""),
      abortController.current
    );
    const colorName = await api();
    colorName &&
      dispatch(
        bindColor({ id: color?.id, name: colorName, hex: color?.tempHex })
      );
  };

  return (
    <div
      style={{ backgroundColor: color?.hex }}
      className="flex flex-col-reverse shadow"
    >
      <div className="bg-white p-3 text-black">
      <p>{color?.type}</p>
        <div className="flex items-center gap-x-2">
          
          <span>{color?.hex}</span>{" "}
          <input
            type="color"
            name="favcolor"
            className="cursor-pointer"
            value={color?.hex}
            onChange={(e) =>
              dispatch(bindTempHex({ id: color?.id, hex: e.target.value }))
            }
            onBlur={fetchColorInfo}
          ></input>
          
          <button onClick={()=>dispatch(lockColor({id:color.id}))} title="lock this colour to generate palette similar to this" className="cursor-pointer">
            {
              !color?.lock && <img src={unlock} alt="unlock" className="w-5 h-5"/>
            }
            {
              color?.lock && <img src={lock} alt="lock" className="w-5 h-5"/>
            }
            </button>
        </div>
        <p>{color?.name} </p>
      </div>
    </div>
  );
};

export default Color;
