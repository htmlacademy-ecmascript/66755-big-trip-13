import {contains, remove, render, RenderPosition, replace} from "../helpers/render";
import PointView from "../view/point";
import PointEditView from "../view/edit-point";
import {isEscape} from "../utils/utils";

export default class Point {
  constructor(container, onChange) {
    this._container = container;
    this._onChange = onChange;

    this._pointComponent = null;
    this._pointEditComponent = null;

    this._previousPointComponent = this._pointComponent;
    this._previousPointEditComponent = this._pointEditComponent;

    this._onEscapePressed = this._onEscapePressed.bind(this);
    this._replaceFormToCard = this._replaceFormToCard.bind(this);
    this._replaceCardToForm = this._replaceCardToForm.bind(this);
  }

  init(point) {
    this._point = point;
    this._renderPoint();
  }

  _onEscapePressed(event) {
    if (isEscape(event)) {
      event.preventDefault();
      this._replaceFormToCard();
    }
  };

  _replaceCardToForm() {
    replace(this._pointEditComponent, this._pointComponent);
    document.addEventListener(`keydown`, this._onEscapePressed);
  }

  _replaceFormToCard() {
    replace(this._pointComponent, this._pointEditComponent);
    document.removeEventListener(`keydown`, this._onEscapePressed);
  }

  _renderPoint() {
    this._previousPointComponent = this._pointComponent;
    this._previousPointEditComponent = this._pointEditComponent;

    this._pointComponent = new PointView(this._point);
    this._pointEditComponent = new PointEditView(this._point);

    this._pointComponent.setClickHandler(() => this._replaceCardToForm());

    this._pointComponent.setFavoriteHandler(() => {
      this._onChange({...this._point, isFavorite: !this._point.isFavorite})
    });
    this._pointEditComponent.setClickHandler(() => this._replaceFormToCard());
    this._pointEditComponent.setSubmitHandler(() => this._replaceFormToCard());

    if (!this._previousPointComponent || !this._previousPointEditComponent) {
      render(this._container, this._pointComponent, RenderPosition.BEFORE_END);
    }

    if (contains(this._container, this._previousPointComponent)) {
      replace(this._pointComponent, this._previousPointComponent);
    }

    if (contains(this._container, this._previousPointEditComponent)) {
      replace(this._pointEditComponent, this._previousPointEditComponent);
    }

    remove(this._previousPointComponent);
    remove(this._previousPointEditComponent);
  }

  destroy() {
    remove(this._pointComponent);
    remove(this._pointEditComponent);
  }
}
