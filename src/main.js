import {createTripInfoTemplate} from "./view/tripInfo";
import {createMenuTemplate} from "./view/menu";
import {createFilterTemplate} from "./view/filter";
import {createSortTemplate} from "./view/sort";
import {createListTemplate} from "./view/list";
import {createPointTemplate} from "./view/point";
import {createEditPointTemplate} from "./view/editPoint";
import {createTripCostTemplate} from "./view/tripCost";

const render = (container, content, position) => {
  container.insertAdjacentHTML(position, content);
};

const InsertPosition = {
  BEFORE_BEGIN: `beforebegin`,
  AFTER_BEGIN: `afterbegin`,
  BEFORE_END: `beforeend`,
  AFTER_END: `afterend`
};

const POINTS_COUNT = 3;

const pageHeaderElement = document.querySelector(`.page-header`);
const pageMainElement = document.querySelector(`.page-main`);
const tripMainElement = pageHeaderElement.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripEventsElement = pageMainElement.querySelector(`.trip-events`);

render(tripMainElement, createTripInfoTemplate(), InsertPosition.AFTER_BEGIN);
const tripInfoElement = tripMainElement.querySelector(`.trip-info`);

render(tripInfoElement, createTripCostTemplate(), InsertPosition.AFTER_BEGIN);

render(tripControlsElement, createMenuTemplate(), InsertPosition.AFTER_BEGIN);
render(tripControlsElement, createFilterTemplate(), InsertPosition.BEFORE_END);
render(tripEventsElement, createSortTemplate(), InsertPosition.BEFORE_END);

render(tripEventsElement, createListTemplate(), InsertPosition.BEFORE_END);

const pointsListElement = tripEventsElement.querySelector(`.trip-events__list`);

render(pointsListElement, createEditPointTemplate(), InsertPosition.BEFORE_END);

for (let i = 0; i < POINTS_COUNT; i++) {
  render(pointsListElement, createPointTemplate(), InsertPosition.BEFORE_END);
}
