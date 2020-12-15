import {createElement} from "../helpers/create-element";

const createDestinationDetailsTemplate = ({description, photos}) => {
  return `
    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${description}</p>

      <div class="event__photos-container">
        <div class="event__photos-tape">
          ${photos.length &&
            photos.map((photo) => {
              return `
                <img
                  class="event__photo"
                  src="${photo}"
                  alt="Event photo">
              `;
            })}
         </div>
      </div>
    </section>
  `;
};

export default class DestinationDetails {
  constructor(description) {
    this._description = description;
    this._element = null;
  }

  getTemplate() {
    return createDestinationDetailsTemplate(this._description);
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
