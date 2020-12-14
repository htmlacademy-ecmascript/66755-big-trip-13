import {createElement} from "../helpers/create-element";

const createLoading = () => {
  return `<p class="trip-events__msg">Loading...</p>`;
};

export default class Loading {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createLoading();
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
