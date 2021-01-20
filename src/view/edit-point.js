import {formatDate} from "../utils/date";
import AvailableOffersView from "./available-offers";
import DestinationDetailsView from "./destination-details";
import EventTypeItemsView from "./event-type-items";
import CitiesDatalistView from "./cities-datalist";
import {isMainClick, toCapitalize} from "../utils/utils";
import {parseDataToPoint, parsePointToData} from "../utils/point";
import SmartView from "./smart";
import {getOffersByPointType} from "../mock/option";
import {CITIES} from "../mock/cities";

const createEditPointTemplate = (data) => {
  const {
    pointType,
    city,
    offers,
    basePrice,
    startDate,
    endDate,
    destinationDescription,
    availableOffers
  } = data;

  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img
                class="event__type-icon"
                width="17"
                height="17"
                src="img/icons/${pointType.toLowerCase()}.png"
                alt="Event type icon"
              >
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${new EventTypeItemsView(pointType).getTemplate()}
              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${pointType}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${city}" list="destination-list-1">
            ${new CitiesDatalistView().getTemplate()}
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${formatDate(startDate)}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${formatDate(endDate)}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        ${availableOffers.length || destinationDescription ? `
          <section class="event__details">
            ${availableOffers.length ? new AvailableOffersView(availableOffers, offers).getTemplate() : ``}
            ${destinationDescription ? new DestinationDetailsView(destinationDescription).getTemplate() : ``}
          </section>
        ` : ``}
      </form>
    </li>
  `;
};

export default class EditPoint extends SmartView {
  constructor(point, descriptionList) {
    super();

    this._point = point;
    this._descriptionList = descriptionList;
    this._data = parsePointToData(point, this._descriptionList);

    this._clickHandler = this._clickHandler.bind(this);
    this._submitHandler = this._submitHandler.bind(this);
    this._pointTypeHandler = this._pointTypeHandler.bind(this);
    this._cityHandler = this._cityHandler.bind(this);

    this._setInnerHandlers();
  }

  _setInnerHandlers() {
    this.getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, this._clickHandler);

    this.getElement()
      .querySelector(`.event.event--edit`)
      .addEventListener(`submit`, this._submitHandler);

    this.getElement()
      .querySelector(`.event__type-list`)
      .addEventListener(`change`, this._pointTypeHandler);

    this.getElement()
      .querySelector(`.event__input--destination`)
      .addEventListener(`input`, this._cityHandler);
  }

  restoreHandlers() {
    this._setInnerHandlers();

    this.setClickHandler(this._callback.click);
    this.setSubmitHandler(this._callback.submit);
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, this._clickHandler);
  }

  _clickHandler(event) {
    if (isMainClick(event)) {
      event.preventDefault();
      this._callback.click();
    }
  }

  setSubmitHandler(callback) {
    this._callback.submit = callback;
    this.getElement()
      .querySelector(`.event.event--edit`)
      .addEventListener(`submit`, this._submitHandler);
  }

  _submitHandler(event) {
    event.preventDefault();
    this._callback.submit(parseDataToPoint(this._data));
  }

  _cityHandler(event) {
    event.preventDefault();
    const newValue = event.target.value.trim();

    if (newValue !== this._data.city && CITIES.includes(newValue)) {
      this.updateData(
          Object.assign(
              {},
              this._data,
              {
                city: newValue,
                destinationDescription: this._descriptionList.getDescriptionByCity(newValue),
              }
          ));
    }
  }

  _pointTypeHandler(event) {
    const pointType = event.target.value;

    this.updateData(
        Object.assign(
            {},
            this._data,
            {
              pointType,
              offers: [],
              availableOffers: getOffersByPointType(pointType)
            }
        ));
  }

  getTemplate() {
    return createEditPointTemplate(this._data);
  }

  reset(point) {
    this.updateData(
        parsePointToData(point, this._descriptionList)
    );
  }
}
