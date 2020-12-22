import AbstractView from "../view/abstract";

const RenderPosition = {
  AFTER_BEGIN: `afterbegin`,
  BEFORE_END: `beforeend`,
};

const renderTemplate = (container, content, position) => {
  if (container instanceof AbstractView) {
    container = container.getElement();
  }
  container.insertAdjacentHTML(position, content);
};

const render = (container, element, position) => {
  if (container instanceof AbstractView) {
    container = container.getElement();
  }

  if (element instanceof AbstractView) {
    element = element.getElement();
  }

  switch (position) {
    case RenderPosition.AFTER_BEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFORE_END:
      container.append(element);
      break;
  }
};

const replace = (newChild, oldChild) => {
  if (newChild instanceof AbstractView) {
    newChild = newChild.getElement();
  }

  if (oldChild instanceof AbstractView) {
    oldChild = oldChild.getElement();
  }

  if (newChild && oldChild && oldChild.parentElement) {
    oldChild.parentElement.replaceChild(newChild, oldChild);
  }
};

const contains = (container, child) => {
  if (container instanceof AbstractView) {
    container = container.getElement();
  }

  if (child instanceof AbstractView) {
    child = child.getElement();
  }

  return container.contains(child);
};

const remove = (element) => {
  if (element === null) {
    return;
  }

  if (!(element instanceof AbstractView)) {
    throw new Error(`Can't delete not AbstractView instance`);
  }

  element.getElement().remove();
  element.removeElement();
}

export {
  renderTemplate,
  render,
  replace,
  remove,
  contains,
  RenderPosition
};
