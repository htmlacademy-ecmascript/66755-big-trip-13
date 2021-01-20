import TripInfoView from "./view/trip-info";
import MenuView from "./view/menu";
import FilterView from "./view/filter";
import TripCostView from "./view/trip-cost";
import {render, RenderPosition} from "./utils/render";
import {createPoints} from "./mock/points";
import TripPresenter from "./presenters/trip";
import {CITIES} from "./mock/cities";
import DescriptionList from "./mock/descriptionList";

const POINTS_COUNT = 20;
const points = createPoints(POINTS_COUNT);
const descriptionList = new DescriptionList(CITIES);

const pageHeaderElement = document.querySelector(`.page-header`);
const pageMainElement = document.querySelector(`.page-main`);
const pageBodyContainer = pageMainElement.querySelector(`.page-body__container`);
const tripMainElement = pageHeaderElement.querySelector(`.trip-main`);
const tripControlsElement = tripMainElement.querySelector(`.trip-controls`);

if (points.length) {
  const tripInfo = new TripInfoView(points);

  render(tripMainElement, tripInfo, RenderPosition.AFTER_BEGIN);
  render(tripInfo, new TripCostView(points), RenderPosition.BEFORE_END);
}
render(tripControlsElement, new MenuView(), RenderPosition.AFTER_BEGIN);
render(tripControlsElement, new FilterView(), RenderPosition.BEFORE_END);

const tripPointsPresenter = new TripPresenter(pageBodyContainer, descriptionList);
tripPointsPresenter.init(points);
