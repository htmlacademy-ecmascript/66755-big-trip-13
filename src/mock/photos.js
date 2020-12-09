const PHOTOS_MAX_COUNT = 3;

const getRandomPhoto = () => `http://picsum.photos/248/152?r=${Math.random()}`;

const getRandomPhotos = () => {
  const photos = [];

  for (let i = 0; i < PHOTOS_MAX_COUNT; i++) {
    const randomPhoto = getRandomPhoto();
    photos.push(randomPhoto);
  }

  return photos;
};

export {getRandomPhotos};
