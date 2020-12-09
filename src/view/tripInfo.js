import {formatDate} from "../utils/date";

const joinPointsCities = (points) => {
  return points.reduce((acc, point, index) => {
    return `${acc}${!index ? ` - ` : ``}${point.city}`;
  }, ``);
};

const createTripInfoTemplate = (points) => {
  const cities = [];

  points.forEach((point) => {
    if (cities.indexOf(point.city) === -1) {
      cities.push(point.city);
    }
  });

  const firstPoint = points[0];
  const lastPoint = points[points.length - 1];

  const title = cities.length > 3 ?
    `${firstPoint.city} - ... - ${lastPoint.city}` :
    joinPointsCities(points);

  const startDate = formatDate(firstPoint.startDate, `DD MMM`);
  const endDate = formatDate(lastPoint.endDate, `DD MMM`);

  const dates = (startDate !== endDate) ?
    `${startDate} - ${endDate}` :
    `${startDate}`;

  return `
    <section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${title}</h1>
        <p class="trip-info__dates">${dates}</p>
      </div>
    </section>
  `;
};

export {
  createTripInfoTemplate
};
