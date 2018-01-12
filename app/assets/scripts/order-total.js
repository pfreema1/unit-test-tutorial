function orderTotal(order) {
  return order.items.reduce((prevVal, elem) => prevVal + (elem.price * (elem.quantity || 1)), 0);
}

module.exports = orderTotal;