import TripInfoView from "./view/tripInfo";
import MenuView from "./view/menu";
import FilterView from "./view/filter";
import SortView from "./view/sort";
import ListView from "./view/list";
import PointView from "./view/point";
import TripCostView from "./view/trip-cost";
import {render, RenderPosition} from "./helpers/render";
import {createPoints} from "./mock/points";

const points = createPoints(16);

const pageHeaderElement = document.querySelector(`.page-header`);
const pageMainElement = document.querySelector(`.page-main`);
const tripMainElement = pageHeaderElement.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);
const tripEventsElement = pageMainElement.querySelector(`.trip-events`);

const tripInfo = new TripInfoView(points);
render(tripMainElement, tripInfo.getElement(), RenderPosition.AFTER_BEGIN);
render(tripInfo.getElement(), new TripCostView(points).getElement(), RenderPosition.BEFORE_END);

render(tripControlsElement, new MenuView().getElement(), RenderPosition.AFTER_BEGIN);
render(tripControlsElement, new FilterView().getElement(), RenderPosition.BEFORE_END);

render(tripEventsElement, new SortView().getElement(), RenderPosition.BEFORE_END);

const list = new ListView();
render(tripEventsElement, list.getElement(), RenderPosition.BEFORE_END);

points.forEach((point) => {
  render(list.getElement(), new PointView(point).getElement(), RenderPosition.BEFORE_END);
});
