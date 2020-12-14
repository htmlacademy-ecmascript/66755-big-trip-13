import {createTripInfoTemplate} from "./view/tripInfo";
import {createMenuTemplate} from "./view/menu";
import {createFilterTemplate} from "./view/filter";
import {createSortTemplate} from "./view/sort";
import {createListTemplate} from "./view/list";
import {createPointTemplate} from "./view/point";
import {createEditPointTemplate} from "./view/editPoint";
import {createTripCostTemplate} from "./view/tripCost";
import {renderTemplate} from "./helpers/render";
import {createPoints} from "./mock/points";
import {createAddNewPointTemplate} from "./view/addNewPoint";
import {getRandomNumber} from "./utils/random";
import {RenderPosition} from "./helpers/render";

const points = createPoints(16);

const pageHeaderElement = document.querySelector(`.page-header`);
const pageMainElement = document.querySelector(`.page-main`);
const tripMainElement = pageHeaderElement.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripEventsElement = pageMainElement.querySelector(`.trip-events`);

renderTemplate(tripMainElement, createTripInfoTemplate(points), RenderPosition.AFTER_BEGIN);
const tripInfoElement = tripMainElement.querySelector(`.trip-info`);

renderTemplate(tripInfoElement, createTripCostTemplate(points), RenderPosition.BEFORE_END);

renderTemplate(tripControlsElement, createMenuTemplate(), RenderPosition.AFTER_BEGIN);
renderTemplate(tripControlsElement, createFilterTemplate(), RenderPosition.BEFORE_END);
renderTemplate(tripEventsElement, createSortTemplate(), RenderPosition.BEFORE_END);

renderTemplate(tripEventsElement, createListTemplate(), RenderPosition.BEFORE_END);

const pointsListElement = tripEventsElement.querySelector(`.trip-events__list`);

if (getRandomNumber(0, 1)) {
  renderTemplate(pointsListElement, createAddNewPointTemplate(), RenderPosition.BEFORE_END);
  points.forEach((point) => {
    renderTemplate(pointsListElement, createPointTemplate(point), RenderPosition.BEFORE_END);
  });
} else {
  renderTemplate(pointsListElement, createEditPointTemplate(points[0]), RenderPosition.BEFORE_END);
  points.slice(1).forEach((point) => {
    renderTemplate(pointsListElement, createPointTemplate(point), RenderPosition.BEFORE_END);
  });
}
