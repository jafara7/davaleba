let list = document.getElementById("list");
let products = [];
let shoppingList = [];
function myfunction() {
  products = [
    {
      name: document.getElementById("1").value,
      category: document.getElementById("2").value,
      price: document.getElementById("3").value,
    },
  ];

  function renderProduct() {
    products.forEach((product) => {
      let newProduct = document.createElement("li");
      newProduct.innerHTML = `
        <span class="name">${product.name}</span>
        <span class="category">${product.category}</span>
        <span class="price">${product.price}</span>
        `;
      list.appendChild(newProduct);
    });
  }
  renderProduct();
}
