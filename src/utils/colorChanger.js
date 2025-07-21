export function changeColors(colors){
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty('--color-primaryBG', colors[0]);
    rootStyle.setProperty('--color-secondaryBG', colors[1]);
    rootStyle.setProperty('--color-primary', colors[2]);
    rootStyle.setProperty('--color-secondary', colors[3]);
    rootStyle.setProperty('--color-textPrimary', colors[4]);
}


export function changeIndividualColor(key,color){
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty(key, color);
}