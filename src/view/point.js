import {formatDate, getDateTimeFromDate, getDurationString} from "../utils/date";
import OffersView from "./offers";
import {isMainClick} from "../utils/utils";
import {parsePointToData} from "../utils/point";
import SmartView from "./smart";

const createPointTemplate = (point) => {
  const {
    pointType,
    city,
    offers,
    totalPrice,
    startDate,
    endDate,
    isFavorite
  } = point;

  const shortMonthName = formatDate(startDate, `MMM`);
  const startDay = formatDate(startDate, `D`);
  const eventDuration = getDurationString(startDate, endDate) || `30M`;

  return `
    <li class="trip-events__item">
      <div class="event">
        <time
            class="event__date"
            datetime="${getDateTimeFromDate(startDate)}"
        >
            ${shortMonthName.toUpperCase()} ${startDay}
        </time>

        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${pointType.toLowerCase()}.png" alt="Event type icon">
        </div>

        <h3 class="event__title">${pointType} ${city}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${getDateTimeFromDate(startDate)}">${formatDate(startDate, `HH:mm`)}</time>
            &mdash;
            <time class="event__end-time" datetime="${getDateTimeFromDate(endDate)}">${formatDate(endDate, `HH:mm`)}</time>
          </p>
          <p class="event__duration">${eventDuration}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${totalPrice}</span>
        </p>
        ${new OffersView(offers).getTemplate()}
        <button class="event__favorite-btn${isFavorite ? ` event__favorite-btn--active` : ``}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>
  `;
};

export default class Point extends SmartView {
  constructor(point, descriptionList) {
    super();

    this._point = point;
    this._descriptionList = descriptionList;
    this._data = parsePointToData(point, this._descriptionList);

    this._onClickHandler = this._onClickHandler.bind(this);
    this._onFavoriteClick = this._onFavoriteClick.bind(this);

    this.restoreHandlers();
  }

  reset(point) {
    this._point = point;
    this._data = parsePointToData(point, this._descriptionList);
    this.updateElement();
  }

  restoreHandlers() {
    this._setHandlers();
  }

  _setHandlers() {
    this.getElement()
      .querySelector(`.event__favorite-btn`)
      .addEventListener(`click`, this._onFavoriteClick);

    this.getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, this._onClickHandler);
  }

  _onClickHandler(event) {
    if (isMainClick(event)) {
      event.preventDefault();
      this._callback.click();
    }
  }

  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement()
      .querySelector(`.event__rollup-btn`)
      .addEventListener(`click`, this._onClickHandler);
  }

  setFavoriteHandler(callback) {
    this._callback.favoriteClick = callback;
    this.getElement()
      .querySelector(`.event__favorite-btn`)
      .addEventListener(`click`, this._onFavoriteClick);
  }

  _onFavoriteClick(event) {
    if (isMainClick(event)) {
      event.preventDefault();
      this._callback.favoriteClick();
    }
  }

  getTemplate() {
    return createPointTemplate(this._point);
  }
}
