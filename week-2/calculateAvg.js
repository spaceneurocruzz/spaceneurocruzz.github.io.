function avg(data) {
  let total = 0;
  let size = data.size;
  for (let ix = 0; ix < size; ix++) {
    total += data.products[ix].price;
  }

  return total / size;
}

console.log(
  avg({
    size: 3,
    products: [
      {
        name: "Product 1",
        price: 100,
      },
      {
        name: "Product 2",
        price: 700,
      },
      {
        name: "Product 3",
        price: 250,
      },
    ],
  })
); // show the average price of all products
