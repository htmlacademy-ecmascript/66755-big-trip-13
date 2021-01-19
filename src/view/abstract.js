import {createElement} from "../utils/create-element";

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Cannot create instance of Abstract class`);
    }

    this._element = null;
    this._callback = {};
  }

  getTemplate() {
    throw new Error(`Method getTemplate must be realized.`);
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
