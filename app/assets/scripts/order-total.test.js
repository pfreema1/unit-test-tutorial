const orderTotal = require("./order-total");



it("Quantity", () => {
  expect(orderTotal({
    items: [
      { "name": "Dragon Candy", price: 2, quantity: 3 }
    ]
  })).toBe(6);
});

if(orderTotal({
  items: [
    { "name": "Dragon Candy", price: 2, quantity: 3 }
  ]
}) !== 6) {
  throw new Error("Check fail: Quantity");
}

if(orderTotal({
  items: [
    { "name": "dragon poo", price: 3 }
  ]
}) !== 3) {
  throw new Error("Check fail:  No quantity specified");
}

if(orderTotal({
  items: [
    { name: "Dragon food", price: 8, quantity: 1 },
    { name: "Dragon cage (small)", price: 800, quantity: 1 }
  ]
}) !== 808) {
  throw new Error("Check fail: Happy path (example 1)");
}

if(orderTotal({
  items: [
    { name: "Dragon collar", price: 20, quantity: 1 },
    { name: "Dragon chew toy", price: 40, quantity: 1 }
  ]
}) !== 60) {
  throw new Error("Check fail: Happy path (example 2)");
}


