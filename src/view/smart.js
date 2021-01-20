import AbstractView from "./abstract";

export default class SmartView extends AbstractView {
  constructor() {
    super();
    this._data = {};

    if (new.target === SmartView) {
      throw new Error(`Cannot create instance of Smart class`);
    }
  }

  updateData(update, justDataUpdating = false) {
    if (!update) {
      return;
    }

    this._data = Object.assign({}, this._data, update);

    if (!justDataUpdating) {
      this.updateElement();
    }
  }

  updateElement() {
    let prevElement = this.getElement();
    const parent = prevElement.parentElement;
    this.removeElement();

    const newElement = this.getElement();

    parent.replaceChild(newElement, prevElement);

    this.restoreHandlers();
  }

  restoreHandlers() {
    throw new Error(`restoreHandlers is not realized`);
  }
}
