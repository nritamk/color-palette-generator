const Color = ({ color }) => {
  return (
    <div
      style={{ backgroundColor: color?.hex }}
      className="flex flex-col-reverse shadow"
    >
      <div className="bg-white p-3 text-black">
        <h2>{color?.hex}</h2>
        <p>{color?.name}</p>
      </div>
    </div>
  );
};

export default Color;
