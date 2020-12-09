const getRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getRandomItemFromArray = (array) => {
  return array[getRandomNumber(0, array.length - 1)];
};

export {
  getRandomNumber,
  getRandomItemFromArray
};
