import {remove, render, RenderPosition, replace} from "../helpers/render";
import PointView from "../view/point";
import PointEditView from "../view/edit-point";
import {isEscape} from "../utils/utils";

const Mode = {
  DEFAULT: `DEFAULT`,
  EDITING: `EDITING`,
};

export default class PointPresenter {
  constructor(container, onPointUpdate, onModeChange) {
    this._container = container;
    this._mode = Mode.DEFAULT;

    this._onPointUpdate = onPointUpdate;
    this._onModeChange = onModeChange;

    this._pointComponent = null;
    this._pointEditComponent = null;

    this._previousPointComponent = this._pointComponent;
    this._previousPointEditComponent = this._pointEditComponent;

    this._onEscapePressed = this._onEscapePressed.bind(this);
    this._onFavoriteClick = this._onFavoriteClick.bind(this);
    this._onEditClick = this._onEditClick.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this._onCloseClick = this._onCloseClick.bind(this);
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
  }

  _replaceCardToForm() {
    replace(this._pointEditComponent, this._pointComponent);
    document.addEventListener(`keydown`, this._onEscapePressed);
    this._onModeChange();
    this._mode = Mode.EDITING;
  }

  _replaceFormToCard() {
    replace(this._pointComponent, this._pointEditComponent);
    document.removeEventListener(`keydown`, this._onEscapePressed);
    this._mode = Mode.DEFAULT;
  }

  _onEditClick() {
    this._replaceCardToForm();
  }

  _onCloseClick() {
    this._replaceFormToCard();
  }

  _onFavoriteClick() {
    this._onPointUpdate(
        Object.assign(
            {},
            this._point,
            {
              isFavorite: !this._point.isFavorite
            }
        )
    );
  }

  _onSubmit() {
    this._replaceFormToCard();
  }

  _renderPoint() {
    this._previousPointComponent = this._pointComponent;
    this._previousPointEditComponent = this._pointEditComponent;

    this._pointComponent = new PointView(this._point);
    this._pointEditComponent = new PointEditView(this._point);

    this._pointComponent.setClickHandler(this._onEditClick);
    this._pointComponent.setFavoriteHandler(this._onFavoriteClick);
    this._pointEditComponent.setClickHandler(this._onCloseClick);
    this._pointEditComponent.setSubmitHandler(this._onSubmit);

    if (!this._previousPointComponent || !this._previousPointEditComponent) {
      render(this._container, this._pointComponent, RenderPosition.BEFORE_END);
      return;
    }

    if (this._mode === Mode.DEFAULT) {
      replace(this._pointComponent, this._previousPointComponent);
    }

    if (this._mode === Mode.EDITING) {
      replace(this._pointEditComponent, this._previousPointEditComponent);
    }

    remove(this._previousPointComponent);
    remove(this._previousPointEditComponent);
  }

  reset() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceFormToCard();
    }
  }

  destroy() {
    remove(this._pointComponent);
    remove(this._pointEditComponent);
  }
}
