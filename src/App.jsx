import { getRandomPalatte } from './services/colorAPI.js';
import './App.css';
import Color from './components/Colors';
import { useEffect, useRef, useState } from 'react';
import Button from './components/Button.jsx';
import DropDown from './components/DropDown.jsx';

function App() {

  const modeList=[{name:'monochrome',desc:'Uses different tones, tints, and shades of a single hue for a clean, cohesive look'},
  {name:'monochrome-dark',desc:'A monochrome palette focused on darker variations of a single color'},
  {name:'monochrome-light',desc:'A monochrome palette using lighter tints of a single color for a soft, airy feel'},
  {name:'analogic',desc:'Combines colors that are next to each other on the color wheel, creating a harmonious and natural vibe'},
  {name:'complement',desc:'Uses two colors directly opposite each other on the color wheel for strong contrast and balance'},
  {name:'analogic-complement',desc:'Mixes analogic colors with a complementary hue to add contrast while maintaining harmony'},
  {name:'triad',desc:'Uses three colors evenly spaced on the color wheel for vibrant yet balanced contrast'},
  {name:'quad',desc:'Uses four colors evenly spaced around the color wheel for rich, diverse color combinations'}]

  const abortController = useRef(null);
  const [colors, setColors] = useState([]);
  const [mode,setMode]=useState(modeList[0].name);
  const [loading, setLoading] = useState(false);

  const fetchRandomPallete = async () => {
    if (!!abortController.current) abortController.current.abort();
    abortController.current = new AbortController();
    setLoading(true);
    const api = getRandomPalatte(abortController.current,mode);
    const res = await api();
    setLoading(false);
    !!res && setColors(res);
  };

  // cant be written like this because async function always returns a promise and inside ueeffect if you return something that means cleanup function - cleanup functions should be syncronous and async always returns a Promise
  //useEffect(() => fetchRandomPallete(), []);
  useEffect(() => {
    const callAsyncApi = async () => {
      fetchRandomPallete();
    };
    callAsyncApi();
  }, []);

  return (
    <div className="grid grid-cols-5 h-screen">
      {colors?.map((color) => {
        return <Color color={color} key={color.hex} />;
      })}

  <div className="absolute top-4 left-4">

      <DropDown list={modeList} handleSelect={(mode)=>setMode(mode)}/>


  <Button
        className="cursor-pointer ml-3"
        onClick={fetchRandomPallete}
        isLoading={loading}
      >
        Generate random palette
      </Button>
  </div>
      
    </div>
  );
}

export default App;
