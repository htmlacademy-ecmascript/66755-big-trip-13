const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template.trim();

  const hasChildren = newElement.children.length > 1;

  return hasChildren ?
    newElement :
    newElement.firstChild;
};

export {
  createElement
};
