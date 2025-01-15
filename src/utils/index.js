/**
 * This function calculate total price of a new order
 * @param {Array} cart cart: Array of objects
 * @returns {number} Total price
 */
export const totalPrice = (cart) => {
  let sum = 0;
  cart.forEach((item) => (sum += item.price));
  return sum;
};
