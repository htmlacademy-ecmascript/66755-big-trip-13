const ESCAPE = `Escape`;
const MAIN_CLICK = 0;
const isEscape = (event) => event.code === ESCAPE;
const isMainClick = (event) => event.button === MAIN_CLICK;
const toCapitalize = (s) => {
  const firstChar = s.slice(0, 1).toUpperCase();
  const lastChars = [...s].slice(1).map((x) => x.toLowerCase()).join(``);
  return `${firstChar}${lastChars}`;
};

export {
  isEscape,
  isMainClick,
  toCapitalize
};
