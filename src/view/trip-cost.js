import AbstractView from "./abstract";

const createTripCostTemplate = (points) => {
  const totalCost = points.reduce((accumulator, point) => accumulator + point.totalPrice, 0);

  return `
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalCost}</span>
    </p>
  `;
};

export default class TripCost extends AbstractView {
  constructor(points = []) {
    super();
    this._points = points;
  }

  getTemplate() {
    return createTripCostTemplate(this._points);
  }
}
