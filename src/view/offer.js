import AbstractView from "./abstract";

const createOfferTemplate = (offer) => {
  const {name, price} = offer;

  return `
    <li class="event__offer">
      <span class="event__offer-title">${name}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${price}</span>
    </li>
  `;
};

export default class Offer extends AbstractView {
  constructor(offer) {
    super();
    this._offer = offer;
  }

  getTemplate() {
    return createOfferTemplate(this._offer);
  }
}
