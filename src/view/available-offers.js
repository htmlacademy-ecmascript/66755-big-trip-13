import {createElement} from "../helpers/create-element";

const createAvailableOffersTemplate = (availableOffers, offers) => {
  return `
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${availableOffers.length &&
          availableOffers.map((availableOffer) => {
            return `
              <div class="event__offer-selector">
                <input
                  class="event__offer-checkbox visually-hidden"
                  id="event-offer-${availableOffer.id}"
                  name="event-offer-${availableOffer.id}"
                  type="checkbox"
                  ${offers.some((offer) => offer.id === availableOffer.id) ? `checked` : ``}
                >
                <label class="event__offer-label" for="event-offer-${availableOffer.id}">
                  <span class="event__offer-title">${availableOffer.name}</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">${availableOffer.price}</span>
                </label>
              </div>
            `;
          })}
      </div>
    </section>
  `;
};

export default class AvailableOffers {
  constructor(availableOffers, offers) {
    this._availableOffers = availableOffers;
    this._offers = offers;
    this._element = null;
  }

  getTemplate() {
    return createAvailableOffersTemplate(this._availableOffers, this._offers);
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
