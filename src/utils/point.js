import {getPointDurationInMs} from "./date";
import {getOffersByPointType} from "../mock/option";
import {PointType} from "../mock/pointType";
import {CITIES} from "../mock/cities";
import dayjs from "dayjs";

const SortTypes = {
  DAY: `day`,
  TIME: `time`,
  PRICE: `price`
};

const DEFAULT_POINT_TYPE = PointType.FLIGHT;
const DEFAULT_CITY = CITIES[0];
const DEFAULT_BASE_PRICE = 0;
const DEFAULT_OFFERS = [];
const DEFAULT_TOTAL_PRICE = 0;
const DEFAULT_START_DATE = dayjs();
const DEFAULT_END_DATE = dayjs().add(1, `hour`);

const DEFAULT_POINT = {
  pointType: DEFAULT_POINT_TYPE,
  city: DEFAULT_CITY,
  basePrice: DEFAULT_BASE_PRICE,
  offers: DEFAULT_OFFERS,
  totalPrice: DEFAULT_TOTAL_PRICE,
  startDate: DEFAULT_START_DATE,
  endDate: DEFAULT_END_DATE,
};

const sortPointsByDay = (points) => {
  return [...points].sort((point1, point2) => point1.startDate - point2.startDate);
};

const sortPointsByTime = (points) => {
  return [...points].sort((point1, point2) => getPointDurationInMs(point2) - getPointDurationInMs(point1));
};

const sortPointsByPrice = (points) => {
  return [...points].sort((p1, p2) => p2.totalPrice - p1.totalPrice);
};

const parsePointToData = (point, descriptionList) => {
  return Object.assign(
      {},
      point,
      {
        destinationDescription: descriptionList.getDescriptionByCity(point.city),
        availableOffers: getOffersByPointType(point.pointType)
      }
  );
};

const parseDataToPoint = (data) => {
  data = Object.assign({}, data);

  delete data.destinationDescription;
  delete data.availableOffers;

  return data;
};

export {
  SortTypes,
  sortPointsByDay,
  sortPointsByTime,
  sortPointsByPrice,
  parseDataToPoint,
  parsePointToData,
  DEFAULT_POINT
};
