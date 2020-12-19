import {PointType} from "../mock/pointType";
import AbstractView from "./abstract";

const createEventTypeItems = (currentPointType) => {
  return Object.values(PointType).map((pointType) => {
    const value = pointType.toLowerCase();
    const id = `event-type-${value}`;
    const labelClass = `event__type-label event__type-label--${value}`;
    const isChecked = pointType === currentPointType;

    return `
      <div class="event__type-item">
        <input
          id="${id}"
          class="event__type-input visually-hidden"
          type="radio"
          name="event-type"
          value="${value}"
          ${isChecked ? `checked` : ``}
        />

        <label
          class="${labelClass}"
          for="${id}"
        >
          ${pointType}
        </label>
      </div>
    `;
  }).join(``);
};

export default class EventTypeItems extends AbstractView {
  constructor(currentPointType) {
    super();
    this._currentPointType = currentPointType;
  }

  getTemplate() {
    return createEventTypeItems(this._currentPointType);
  }
}
