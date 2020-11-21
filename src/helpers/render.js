const render = (container, content, position) => {
  container.insertAdjacentHTML(position, content);
};

export {
  render
};
