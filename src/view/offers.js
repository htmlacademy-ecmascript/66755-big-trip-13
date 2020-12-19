import OfferView from "./offer";
import AbstractView from "./abstract";

const createOffersTemplate = (offers) => {
  return `
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
        ${offers.map((offer) => new OfferView(offer).getTemplate()).join(``)}
    </ul>
  `;
};

export default class Offers extends AbstractView {
  constructor(offers) {
    super();
    this._offers = offers;
  }

  getTemplate() {
    return createOffersTemplate(this._offers);
  }

}
