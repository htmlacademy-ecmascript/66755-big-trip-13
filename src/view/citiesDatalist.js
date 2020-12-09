import {CITIES} from "../mock/cities";

const createCitiesDatalist = () => {
  return `
    <datalist id="destination-list-1">
      ${CITIES.map((city) => `<option value="${city}"></option>`)}
    </datalist>
  `;
};

export {createCitiesDatalist};
