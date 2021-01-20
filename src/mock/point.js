import {getRandomItemFromArray, getRandomNumber} from "../utils/random";
import {PointType} from "./pointType";
import dayjs from 'dayjs';
import {getOffersByPointType} from "./option";
import {CITIES} from "./cities";

const BASE_PRICE_MIN = 20;
const BASE_PRICE_MAX = 250;

const POINTS_INTERVAL_IN_MINUTES = 60;

const generateId = () => Date.now() + parseInt(`${Math.random() * 10000}`, 10);

const getMinTimeByPointTypeInMinutes = (pointType) => {
  switch (pointType) {
    case PointType.TAXI:
    case PointType.BUS:
    case PointType.TRANSPORT:
    {
      return 10;
    }
    case PointType.TRAIN:
    case PointType.SHIP:
    case PointType.FLIGHT:
    {
      return 40;
    }
    case PointType.DRIVE:
    {
      return 10;
    }

    case PointType.CHECK_IN:
    {
      return 20;
    }

    case PointType.SIGHTSEEING:
    case PointType.RESTAURANT:
    {
      return 30;
    }

    default:
      return 10;
  }
};

const getRandomDate = (minData = null, minDelta) => {
  let startDate = minData;

  if (!minData) {
    startDate = dayjs();
  }

  return dayjs(startDate).add(minDelta, `minute`);
};

const createPoint = (previousEndDate = null) => {
  const pointType = getRandomItemFromArray(Object.values(PointType));
  const startDate = getRandomDate(previousEndDate, POINTS_INTERVAL_IN_MINUTES);
  const endDate = getRandomDate(startDate, getMinTimeByPointTypeInMinutes(pointType));

  const basePrice = getRandomNumber(BASE_PRICE_MIN, BASE_PRICE_MAX);
  const offers = getRandomNumber(0, 1) ? getOffersByPointType(pointType) : [];
  const totalPrice = offers.reduce((acc, offer) => acc + offer.price, basePrice);
  const isFavorite = Boolean(getRandomNumber(0, 1));

  return {
    id: generateId(),
    pointType,
    city: getRandomItemFromArray(CITIES),
    basePrice,
    totalPrice,
    startDate,
    endDate,
    offers,
    isFavorite
  };
};

export {
  createPoint
};
