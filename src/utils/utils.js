const ESCAPE = `Escape`;
const MAIN_CLICK = 0;
const isEscape = (event) => event.code === ESCAPE;
const isMainClick = (event) => event.button === MAIN_CLICK;
const toCapitalize = (s) => [s.slice(0, 1).toUpperCase(), ...s.slice(1)].join(``);

export {
  isEscape,
  isMainClick,
  toCapitalize
};
