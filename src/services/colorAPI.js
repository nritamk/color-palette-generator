function getRandomHexColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return hex.padStart(6, '0').toUpperCase();
}

const colorTransformer = (colorsArr) => {
  return colorsArr?.colors?.map((color) => {
    return {
      name: color?.name?.value,
      hex: color?.hex?.value,
      rgb: color?.rgb?.value,
    };
  });
};

export const getRandomPalatte = (controller,mode) => {
  const api = async () => {
    try {
      const res = await fetch(
        `https://www.thecolorapi.com/scheme?hex=${getRandomHexColor()}&mode=${mode}&count=5`,
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
