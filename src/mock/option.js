import {PointType} from "./pointType";
import {getRandomNumber} from "../utils/random";

const createOption = (id, name, price) => ({
  id,
  name,
  price
});

const getRandomOffersByPointType = (pointType) => {
  return getRandomNumber(0, 1) ? getOffersByPointType(pointType) : [];
};

const getOffersByPointType = (pointType) => {
  switch (pointType) {
    case PointType.TAXI:
    case PointType.BUS:
    case PointType.TRAIN:
    case PointType.SHIP:
    case PointType.TRANSPORT:
    case PointType.FLIGHT:
    {
      return [
        createOption(`business-class`, `Add business class`, 50)
      ];
    }

    case PointType.DRIVE:
    {
      return [
        createOption(`business-class`, `Add business class`, 50),
        createOption(`elite-class`, `Add elite class`, 500),
      ];
    }

    case PointType.CHECK_IN:
    {
      return [
        createOption(`breakfast`, `Add breakfast`, 20),
        createOption(`champagne`, `Add champagne`, 20),
        createOption(`massage`, `Add massage`, 100),
      ];
    }

    case PointType.RESTAURANT:
    {
      return [
        createOption(`live-music`, `Add live music`, 100),
        createOption(`wine`, `Add wine`, 10),
        createOption(`tips`, `Add tips`, 10),
      ];
    }
    case PointType.SIGHTSEEING:
    {
      return [
        createOption(`individual guide`, `Add individual guide`, 100),
        createOption(`lunch`, `Add lunch`, 100),
      ];
    }

    default:
      return [];
  }
};

export {
  getOffersByPointType,
  getRandomOffersByPointType,
  createOption
};
