import {CITIES} from "../mock/cities";
import AbstractView from "./abstract";

const createCitiesDatalist = () => {
  return `
    <datalist id="destination-list-1">
      ${CITIES.map((city) => `<option value="${city}"></option>`)}
    </datalist>
  `;
};

export default class CitiesDatalist extends AbstractView{
  getTemplate() {
    return createCitiesDatalist();
  }
}
