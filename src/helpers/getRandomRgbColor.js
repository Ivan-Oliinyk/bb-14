const getRandomNumber = (min = 0, max = 250) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const getRandomRgbColor = () => {
  return `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
};

export default getRandomRgbColor;
