const ESCAPE = `Escape`;
const MAIN_CLICK = 0;
const isEscape = (event) => event.code === ESCAPE;
const isMainClick = (event) => event.button === MAIN_CLICK;

export {
  isEscape,
  isMainClick
};
