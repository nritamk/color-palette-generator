import { getRandomPalatte } from './services/colorAPI.js';
import './App.css';
import Color from './components/Colors';
import { useEffect, useRef, useState } from 'react';
import Button from './components/Button.jsx';

function App() {
  const abortController = useRef(null);
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRandomPallete = async () => {
    if (!!abortController.current) abortController.current.abort();
    abortController.current = new AbortController();
    setLoading(true);
    const api = getRandomPalatte(abortController.current);
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

      <Button
        className="absolute top-4 left-4 cursor-pointer"
        onClick={fetchRandomPallete}
        isLoading={loading}
      >
        Generate random palette
      </Button>
    </div>
  );
}

export default App;
