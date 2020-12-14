const RenderPosition = {
  BEFORE_BEGIN: `beforebegin`,
  AFTER_BEGIN: `afterbegin`,
  BEFORE_END: `beforeend`,
  AFTER_END: `afterend`
};

const renderTemplate = (container, content, position) => {
  container.insertAdjacentHTML(position, content);
};

const renderElement = (container, element, position) => {
  switch (position) {
    case RenderPosition.AFTER_BEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFORE_END:
      container.append(element);
      break;
  }
};

export {
  renderTemplate,
  renderElement,
  RenderPosition
};
