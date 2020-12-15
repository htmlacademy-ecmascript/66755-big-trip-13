import {createElement} from "../helpers/create-element";
import OfferView from "./offer";

const createOffersTemplate = (offers) => {
  return `
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
        ${offers.map((offer) => new OfferView(offer).getTemplate()).join(``)}
    </ul>
  `;
};

export default class Offers {
  constructor(offers) {
    this._offers = offers;
    this._element = null;
  }

  getTemplate() {
    return createOffersTemplate(this._offers);
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
