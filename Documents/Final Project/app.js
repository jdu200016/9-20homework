import products from "./products.json" assert { type: "json" };

const main = document.querySelector("main");

for (let i = 0; i < products.length; i++) {
  const product = document.createElement("div");

  product.innerHTML =
    "<img src='images/" +
    products[i].image +
    "' >" +
    products[i].name +
    " $" +
    products[i].price;

  main.append(product);
}
