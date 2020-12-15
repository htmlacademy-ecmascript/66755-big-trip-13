import {createElement} from "../helpers/create-element";

const createTripCostTemplate = (points) => {
  const totalCost = points.reduce((accumulator, point) => accumulator + point.totalPrice, 0);

  return `
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalCost}</span>
    </p>
  `;
};

export default class TripCost {
  constructor(points = []) {
    this._points = points;
    this._element = null;
  }

  getTemplate() {
    return createTripCostTemplate(this._points);
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
