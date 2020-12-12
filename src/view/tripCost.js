const createTripCostTemplate = (points) => {
  const totalCost = points.reduce((accumulator, point) => accumulator + point.totalPrice, 0);

  return `
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalCost}</span>
    </p>
  `;
};

export {
  createTripCostTemplate
};
