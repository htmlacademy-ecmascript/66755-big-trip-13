import {createElement} from "../helpers/create-element";

const CreateEmptyListTemplate = () => {
  return `
    <p>
      Click New Event to create your first point
    </p>
  `;
};

export default class EmptyList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return CreateEmptyListTemplate();
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
