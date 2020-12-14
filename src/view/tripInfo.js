import {formatDate} from "../utils/date";
import {createElement} from "../helpers/create-element";

const joinPointsCities = (points) => {
  return points.reduce((acc, point, index) => {
    return `${acc}${!index ? ` - ` : ``}${point.city}`;
  }, ``);
};

const createTripInfoTemplate = (points) => {
  if (!points.length) {
    return ``;
  }

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

export default class TripInfo {
  constructor(points = []) {
    this._points = points;
    this._element = null;
  }

  getTemplate() {
    return createTripInfoTemplate(this._points);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
