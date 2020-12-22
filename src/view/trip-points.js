import AbstractView from "./abstract";

const createTripPointsTemplate = () => {
  return `
    <section class="trip-events">
        <h2 class="visually-hidden">Trip events</h2>
    </section>
  `;
};

export default class TripPoints extends AbstractView {
  getTemplate() {
    return createTripPointsTemplate();
  }
};
