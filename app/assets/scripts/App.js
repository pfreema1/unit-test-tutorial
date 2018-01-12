// const someOrder = {
//   items: [
//     { name: "Dragon food", price: 8, quantity: 8 },
//     { name: "Dragon cage (small)", price: 800, quantity: 2 },
//     { name: "Shipping", price: 40, shipping: true }
//   ]
// };

// const orderTotal = order => {
//   const totalItems = order.items
//     .filter(elem => !elem.shipping)
//     .reduce((prev, cur) => prev + (cur.price * cur.quantity), 0);

//   const shippingItem = order.items.find(elem => !!elem.shipping);

//   const shipping = totalItems > 1000 ? 0 : shippingItem.price;

//   return totalItems + shipping;

// }



// result = orderTotal(someOrder);
// console.log(result);

/*
    "Only write code that is required by a test to pass."

    3 approaches for tdd:
      -obvious implementation (more complex)
      -fake it til you make it
      -triangulation  (simplest)
*/

if(orderTotal({
  items: [
    { name: "Dragon food", price: 8 },
    { name: "Dragon cage (small)", price: 800 }
  ]
}) !== 808) {
  throw new Error("Check fail: Happy path (example 1)");
}

if(orderTotal({
  items: [
    { name: "Dragon collar", price: 20 },
    { name: "Dragon chew toy", price: 40 }
  ]
}) !== 60) {
  throw new Error("Check fail: Happy path (example 2)");
}


function orderTotal(order) {
  return order.items.reduce((prevVal, elem) => prevVal + (elem.price * elem.quantity), 0);
}