import TripInfoView from "./view/trip-info";
import MenuView from "./view/menu";
import FilterView from "./view/filter";
import SortView from "./view/sort";
import ListView from "./view/list";
import PointView from "./view/point";
import PointEditView from "./view/edit-point";
import TripCostView from "./view/trip-cost";
import {render, RenderPosition, replace} from "./helpers/render";
import {createPoints} from "./mock/points";
import EmptyListView from "./view/empty-list";
import {isEscape} from "./utils/utils";

let currentFormClose = null;

const renderPoint = (pointListElement, point) => {
  const pointComponent = new PointView(point);
  const pointEditComponent = new PointEditView(point);

  const replaceCardToForm = () => {
    if (currentFormClose) {
      currentFormClose();
    }

    replace(pointEditComponent, pointComponent);

    currentFormClose = () => replaceFormToCard();
  };

  const replaceFormToCard = () => {
    replace(pointComponent, pointEditComponent);

    document.removeEventListener(`keydown`, onEscapePressed);
    currentFormClose = null;
  };

  const onEscapePressed = (event) => {
    if (isEscape(event)) {
      event.preventDefault();
      currentFormClose();
      document.removeEventListener(`keydown`, onEscapePressed);
    }
  };

  pointComponent.setClickHandler(() => {
    replaceCardToForm();
    document.addEventListener(`keydown`, onEscapePressed);
  });

  pointEditComponent.setClickHandler(() => replaceFormToCard());
  pointEditComponent.setSubmitHandler(() => replaceFormToCard());

  render(pointListElement, pointComponent, RenderPosition.BEFORE_END);
};

const points = createPoints(20);

const pageHeaderElement = document.querySelector(`.page-header`);
const pageMainElement = document.querySelector(`.page-main`);
const tripMainElement = pageHeaderElement.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripEventsElement = pageMainElement.querySelector(`.trip-events`);

if (points.length) {
  const tripInfo = new TripInfoView(points);

  render(tripMainElement, tripInfo, RenderPosition.AFTER_BEGIN);
  render(tripInfo, new TripCostView(points), RenderPosition.BEFORE_END);
  render(tripEventsElement, new SortView(), RenderPosition.BEFORE_END);
}
render(tripControlsElement, new MenuView(), RenderPosition.AFTER_BEGIN);
render(tripControlsElement, new FilterView(), RenderPosition.BEFORE_END);

const list = new ListView();
render(tripEventsElement, list, RenderPosition.BEFORE_END);

if (points.length) {
  points.forEach((point) => {
    renderPoint(list, point);
  });
} else {
  render(list, new EmptyListView(), RenderPosition.AFTER_BEGIN);
}


