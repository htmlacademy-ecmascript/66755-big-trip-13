import dayjs from "dayjs";
import {getOffersByPointType} from "../mock/option";
import {PointType} from "../mock/pointType";
import {CITIES} from "../mock/cities";
import {getDestinationDescription} from "../mock/destinationDescription";
import {formatDate} from "../utils/date";
import {createElement} from "../helpers/create-element";
import EventTypeItemsView from "./event-type-items";
import CitiesDatalistView from "./cities-datalist";
import DestinationDetailsView from "./destination-details";
import AvailableOffersView from "./available-offers";

const DEFAULT_POINT_TYPE = PointType.FLIGHT;
const DEFAULT_CITY = CITIES[0];
const DATE_FORMAT = `YY/M/DD HH:mm`;
const DEFAULT_PRICE = 0;

const createAddNewPointTemplate = () => {
  const pointType = DEFAULT_POINT_TYPE;
  const city = DEFAULT_CITY;
  const offers = [];
  const destinationDescription = city ? getDestinationDescription() : null;
  const availableOffers = getOffersByPointType(pointType);

  const startDate = formatDate(
      dayjs(),
      DATE_FORMAT
  );
  const endDate = formatDate(
      dayjs().add(1, `hour`),
      DATE_FORMAT
  );

  return `
    <li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${DEFAULT_POINT_TYPE.toLowerCase()}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle visually-hidden" id="event-type-toggle-1" type="checkbox">

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
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startDate}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endDate}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${DEFAULT_PRICE}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Cancel</button>
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

export default class CreatePoint {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createAddNewPointTemplate();
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
