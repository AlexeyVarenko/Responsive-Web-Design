/*Step 19
Use const and destructuring to extract name and price variables from product.*/


addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const {name, price}=product;
  }