import SortView from '../view/sort';
import ListView from "../view/list";
import EmptyListView from "../view/empty-list";
import TripPointsView from "../view/trip-points";
import {render, RenderPosition} from "../helpers/render";
import PointPresenter from "./point";
import {updateItem} from "../helpers/common";
import {sortPointsByPrice, sortPointsByTime, sortPointsByDay} from "../utils/point.js";
import {SortType} from "../constants.js";

export default class TripPresenter {
  constructor(container) {
    this._container = container;
    this._taskPresenter = {};
    this._currentSortType = SortType.DAY;

    this._tripPointsComponent = new TripPointsView();
    this._sortComponent = new SortView();
    this._listComponent = new ListView();
    this._emptyListComponent = new EmptyListView();

    this._onPointUpdate = this._onPointUpdate.bind(this);
    this._onModeUpdate = this._onModeUpdate.bind(this);
    this._onSortTypeChange = this._onSortTypeChange.bind(this);
  }

  init(points) {
    this._points = [...points];
    this._initialPoints = points.slice();
    render(this._container, this._tripPointsComponent, RenderPosition.BEFORE_END);
    this._renderTripPoints();
  }

  _sortPoints(sortType) {
    switch (sortType) {
      case SortType.PRICE:
        this._points = sortPointsByPrice(this._initialPoints);
        break;
      case SortType.TIME:
        this._points = sortPointsByTime(this._initialPoints);
        break;
      case SortType.DAY:
      default:
        this._points = sortPointsByDay(this._initialPoints);
        break;
    }

    this._currentSortType = sortType;
  }

  _onSortTypeChange(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortPoints(sortType);
    this._clearPointsList();
    this._renderPoints();
  }

  _renderSort() {
    render(this._tripPointsComponent, this._sortComponent, RenderPosition.BEFORE_END);
    this._sortComponent.setSortTypeChangeHandler(this._onSortTypeChange);
  }

  _renderList() {
    render(this._tripPointsComponent, this._listComponent, RenderPosition.BEFORE_END);
  }

  _renderPoint(point) {
    const pointPresenter = new PointPresenter(this._listComponent, this._onPointUpdate, this._onModeUpdate);
    pointPresenter.init(point);
    this._taskPresenter[point.id] = pointPresenter;
  }

  _renderPoints() {
    this._points.forEach((point) => {
      this._renderPoint(point);
    });
  }

  _onModeUpdate() {
    Object
      .values(this._taskPresenter)
      .forEach((presenter) => presenter.reset());
  }

  _onPointUpdate(updatedPoint) {
    this._points = updateItem(this._points, updatedPoint);
    this._taskPresenter[updatedPoint.id].init(updatedPoint);
  }

  _clearPointsList() {
    Object
      .values(this._taskPresenter)
      .forEach((presenter) => presenter.destroy());

    this._taskPresenter = {};
  }

  _renderEmptyList() {
    render(this._tripPointsComponent, this._emptyListComponent, RenderPosition.AFTER_BEGIN);
  }

  _renderTripPoints() {
    if (!this._points.length) {
      this._renderEmptyList();
      return;
    }

    this._renderSort();
    this._renderList();
    this._renderPoints();
  }
}
