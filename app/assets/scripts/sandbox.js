// import { read } from "fs";

const fetch = require("node-fetch");
const myKey = require("./helper.js");
const orderTotal = require("./order-total");

// const result = orderTotal(fetch, {
//   items: [
//     { "name": "Dragon Candy", price: 2, quantity: 3 }
//   ]
// });

// const result = 
//   fetch("https://vatapi.com/v1/country-code-check?code=DE", {
//     headers: {
//       "apikey": myKey
//     }
    
//   })
//   .then(response => {
//     console.log(response);
//     return response.json(); 
//   })
//   .then(data => {
//     console.log(data.rates.standard);
//     return data.rates.standard.value
//   });

// result = 19;
