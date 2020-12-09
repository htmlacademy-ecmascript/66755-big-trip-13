import {createPoint} from "./point";

const createPoints = (count) => {
  const points = [];
  let previousDate = null;

  for (let i = 0; i < count; i++) {
    const point = createPoint(previousDate);
    points.push(point);
    previousDate = point.endDate;
  }

  return points;
};

export {
  createPoints
};
