import {createTripInfoTemplate} from "./view/tripInfo";
import {createMenuTemplate} from "./view/menu";
import {createFilterTemplate} from "./view/filter";
import {createSortTemplate} from "./view/sort";
import {createListTemplate} from "./view/list";
import {createPointTemplate} from "./view/point";
import {createEditPointTemplate} from "./view/editPoint";
import {createTripCostTemplate} from "./view/tripCost";
import {render} from "./helpers/render";
import {createPoints} from "./mock/points";
import {createAddNewPointTemplate} from "./view/addNewPoint";
import {getRandomNumber} from "./utils/random";

const InsertPosition = {
  BEFORE_BEGIN: `beforebegin`,
  AFTER_BEGIN: `afterbegin`,
  BEFORE_END: `beforeend`,
  AFTER_END: `afterend`
};

const points = createPoints(16);

const pageHeaderElement = document.querySelector(`.page-header`);
const pageMainElement = document.querySelector(`.page-main`);
const tripMainElement = pageHeaderElement.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripEventsElement = pageMainElement.querySelector(`.trip-events`);

render(tripMainElement, createTripInfoTemplate(points), InsertPosition.AFTER_BEGIN);
const tripInfoElement = tripMainElement.querySelector(`.trip-info`);

render(tripInfoElement, createTripCostTemplate(points), InsertPosition.BEFORE_END);

render(tripControlsElement, createMenuTemplate(), InsertPosition.AFTER_BEGIN);
render(tripControlsElement, createFilterTemplate(), InsertPosition.BEFORE_END);
render(tripEventsElement, createSortTemplate(), InsertPosition.BEFORE_END);

render(tripEventsElement, createListTemplate(), InsertPosition.BEFORE_END);

const pointsListElement = tripEventsElement.querySelector(`.trip-events__list`);

if (getRandomNumber(0, 1)) {
  render(pointsListElement, createAddNewPointTemplate(), InsertPosition.BEFORE_END);
  points.forEach((point) => {
    render(pointsListElement, createPointTemplate(point), InsertPosition.BEFORE_END);
  });
} else {
  render(pointsListElement, createEditPointTemplate(points[0]), InsertPosition.BEFORE_END);
  points.slice(1).forEach((point) => {
    render(pointsListElement, createPointTemplate(point), InsertPosition.BEFORE_END);
  });
}
