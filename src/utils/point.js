import {getPointDurationInMs} from "./date";

const SortTypes = {
  DAY: `day`,
  TIME: `time`,
  PRICE: `price`
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

export {
  SortTypes,
  sortPointsByDay,
  sortPointsByTime,
  sortPointsByPrice
};
