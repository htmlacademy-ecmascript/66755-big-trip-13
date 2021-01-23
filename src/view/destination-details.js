import AbstractView from "./abstract";

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
            }).join(``)}
         </div>
      </div>
    </section>
  `;
};

export default class DestinationDetails extends AbstractView {
  constructor(description) {
    super();
    this._description = description;
  }

  getTemplate() {
    return createDestinationDetailsTemplate(this._description);
  }
}
