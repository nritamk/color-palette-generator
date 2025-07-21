
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomPalatte } from "../services/colorAPI.js";
import { storeNewPalette } from "../store/store.jsx";
import { modeList } from "../utils/modes.js";
import DropDown from "../components/DropDown.jsx";
import Button from "../components/Button.jsx";
import Color from "../components/Colors.jsx";
import { useNavigate } from "react-router-dom";
import { changeColors } from "../utils/colorChanger.js";

function ColorPalette() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const colors = useSelector((store) => store.colors);

  const abortController = useRef(null);
  const [mode, setMode] = useState(modeList[5].name);
  const [loading, setLoading] = useState(false);

  const fetchRandomPallete = async () => {
    if (!!abortController.current) abortController.current.abort();
    abortController.current = new AbortController();
    setLoading(true);
    const api = getRandomPalatte(abortController.current, mode,colors?.find((x)=>x.lock)?.hex?.replace('#',''));
    const res = await api();
    setLoading(false);
    !!res && dispatch(storeNewPalette(res));
  };

  const changeAllColors=()=>{
    changeColors(colors?.map((x)=>x.hex));
    navigate('/webpage');
    
  }

  // cant be written like this because async function always returns a promise and inside ueeffect if you return something that means cleanup function - cleanup functions should be syncronous and async always returns a Promise
  //useEffect(() => fetchRandomPallete(), []);

  return (
    <div className="grid grid-cols-5 h-screen relative">
      {colors?.map((color) => {
        return <Color color={color} key={color.id} />;
      })}

      <div className="absolute top-4 left-4">
        <DropDown mode={mode} list={modeList} handleSelect={(mode) => setMode(mode)} />

        <Button
          className="cursor-pointer ml-3"
          onClick={fetchRandomPallete}
          isLoading={loading}
        >
          Generate random palette
        </Button>

        {
            !!colors?.length && <Button className="ml-3" onClick={changeAllColors}>Visualise these colors in a webpage</Button>
        }
      </div>

    </div>
  );
}

export default ColorPalette;
