import {CITIES} from "../mock/cities";
import {createElement} from "../helpers/create-element";

const createCitiesDatalist = () => {
  return `
    <datalist id="destination-list-1">
      ${CITIES.map((city) => `<option value="${city}"></option>`)}
    </datalist>
  `;
};

export default class CitiesDatalist {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createCitiesDatalist();
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
