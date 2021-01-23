import {getDestinationDescription} from "./destinationDescription";

export default class DescriptionList {
  constructor(cities) {
    this._map = new Map();

    cities.forEach((city) => {
      this._map.set(city, getDestinationDescription());
    });
  }

  getDescriptionByCity(city) {
    return this._map.has(city) ? this._map.get(city) : null;
  }
}

