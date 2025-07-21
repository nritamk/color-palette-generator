function getRandomHexColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return hex.padStart(6, '0').toUpperCase();
}

const colorTransformer = (colorsArr) => {
  return colorsArr?.colors?.map((color,index) => {
    return {
      id:index+1,
      type:(()=>{
        if(index===0){
          return 'Background Primary'
        }
        else if(index===1){
          return 'Background Secondary'
        }
        else if(index===2){
          return 'Primary Accent'
        }
        else if(index===3){
          return 'Secondary Accent'
        }
        else if(index===4){
          return 'Text Color'
        }
      })(),
      name: color?.name?.value,
      hex: color?.hex?.value,
      tempHex: color?.hex?.value,
      lock:false
    };
  });
};

export const getRandomPalatte = (controller,mode,hex) => {
  const api = async () => {
    try {
      const res = await fetch(
        `https://www.thecolorapi.com/scheme?hex=${hex??getRandomHexColor()}&mode=${mode}&count=5`,
        {
          signal: controller.signal,
        }
      );
      return colorTransformer(await res.json());
    } catch (err) {
      console.log(err);
    }
  };

  return api;
};


export const getColorInfo = (hex,controller) => {
  const api = async () => {
    try {
      const res = await fetch(
        `https://www.thecolorapi.com/id?hex=${hex}`, {
          signal: controller.signal  
      }
      );
      return (await res.json())?.name?.value;
    } catch (err) {
      console.log(err);
    }
  };

  return api;
};
