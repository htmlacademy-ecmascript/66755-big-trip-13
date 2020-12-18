import TripInfoView from "./view/trip-info";
import MenuView from "./view/menu";
import FilterView from "./view/filter";
import SortView from "./view/sort";
import ListView from "./view/list";
import PointView from "./view/point";
import PointEditView from "./view/edit-point";
import TripCostView from "./view/trip-cost";
import {render, RenderPosition} from "./helpers/render";
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

    pointListElement.replaceChild(pointEditComponent.getElement(), pointComponent.getElement());

    currentFormClose = () => replaceFormToCard();
  };

  const replaceFormToCard = () => {
    pointListElement.replaceChild(pointComponent.getElement(), pointEditComponent.getElement());

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

  render(pointListElement, pointComponent.getElement(), RenderPosition.BEFORE_END);
};

const points = createPoints(20);

const pageHeaderElement = document.querySelector(`.page-header`);
const pageMainElement = document.querySelector(`.page-main`);
const tripMainElement = pageHeaderElement.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripEventsElement = pageMainElement.querySelector(`.trip-events`);

if (points.length) {
  const tripInfo = new TripInfoView(points);

  render(tripMainElement, tripInfo.getElement(), RenderPosition.AFTER_BEGIN);
  render(tripInfo.getElement(), new TripCostView(points).getElement(), RenderPosition.BEFORE_END);
  render(tripEventsElement, new SortView().getElement(), RenderPosition.BEFORE_END);
}
render(tripControlsElement, new MenuView().getElement(), RenderPosition.AFTER_BEGIN);
render(tripControlsElement, new FilterView().getElement(), RenderPosition.BEFORE_END);

const list = new ListView();
render(tripEventsElement, list.getElement(), RenderPosition.BEFORE_END);

if (points.length) {
  points.forEach((point) => {
    renderPoint(list.getElement(), point);
  });
} else {
  render(list.getElement(), new EmptyListView().getElement(), RenderPosition.AFTER_BEGIN);
}

