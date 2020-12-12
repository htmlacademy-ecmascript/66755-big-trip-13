import {getRandomItemFromArray} from "../utils/random";
import {getRandomPhotos} from "../mock/photos";

const PARAGRAPHS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const PARAGRAPHS_MIN_COUNT = 1;
const PARAGRAPHS_MAX_COUNT = 5;

const getRandomDescription = () => {
  const paragraphs = [];

  for (let i = PARAGRAPHS_MIN_COUNT; i < PARAGRAPHS_MAX_COUNT; i++) {
    const randomParagraph = getRandomItemFromArray(PARAGRAPHS);
    paragraphs.push(randomParagraph);
  }

  return paragraphs.join(` `);
};

const getDestinationDescription = () => ({
  description: getRandomDescription(),
  photos: getRandomPhotos()
});

export {
  getDestinationDescription
};
