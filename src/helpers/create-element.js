const createElement = (html) => {
  const template = document.createElement(`template`);
  template.innerHTML = html.trim();

  const hasChildren = template.content.children.length > 1;

  return hasChildren ?
    template.content :
    template.content.firstElementChild;
};

export {
  createElement
};
