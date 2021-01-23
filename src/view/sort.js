import {SortTypes} from "../utils/point";
import {toCapitalize} from "../utils/utils";
import SmartView from "./smart";

const COLUMNS = [
  SortTypes.DAY,
  `event`,
  SortTypes.TIME,
  SortTypes.PRICE,
  `offers`
];

const createSortItemTemplate = (value, isChecked, isActive) => {
  return `
    <div class="trip-sort__item trip-sort__item--${value}">
      <input
        id="sort-${value}"
        class="trip-sort__input visually-hidden"
        type="radio"
        name="trip-sort"
        value="sort-${value}"
        data-sort-type="${value}"
        ${isChecked ? `checked` : ``}
        ${!isActive ? `disabled` : ``}
      >
      <label class="trip-sort__btn" for="sort-${value}">${toCapitalize(value)}</label>
    </div>
  `;
};

const createSortTemplate = (currentSortType) => {
  return `
    <form class="trip-events__trip-sort trip-sort" action="#" method="get">
    ${COLUMNS.map((column) => {
    return createSortItemTemplate(
        column,
        column === currentSortType,
        Object.values(SortTypes).includes(column)
    );
  }).join(``)}
    </form>
  `;
};

export default class Sort extends SmartView {
  constructor() {
    super();
    this._currentSortType = SortTypes.DAY;
    this._data = this._currentSortType;

    this._onSortTypeChange = this._onSortTypeChange.bind(this);
  }

  restoreHandlers() {
    this.setSortTypeChangeHandler(this._callback.sortTypeChange);
  }

  _onSortTypeChange(event) {
    if (event.target.tagName !== `INPUT`) {
      return;
    }

    const sortType = event.target.dataset.sortType;

    event.preventDefault();

    this.updateData(sortType);

    this._currentSortType = sortType;
    this._callback.sortTypeChange(sortType);
  }

  setSortTypeChangeHandler(callback) {
    this._callback.sortTypeChange = callback;
    this.getElement().addEventListener(`click`, this._onSortTypeChange);
  }

  getTemplate() {
    return createSortTemplate(this._currentSortType);
  }
}
