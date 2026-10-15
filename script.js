const items = [
  {
    name: "Shoes",
    price: 999,
    category: "Fashion",
    img: "https://images.pexels.com/photos/38914242/pexels-photo-38914242.jpeg"
  },
  {
    name: "Watch",
    price: 223,
    category: "Tech",
    img: "https://images.pexels.com/photos/30250930/pexels-photo-30250930.jpeg"
  },
  {
    name: "Headphone",
    price: 1499,
    category: "All",
    img: "https://images.pexels.com/photos/7772548/pexels-photo-7772548.jpeg"
  }
];
let cart = 0
function showProduct(){
    const search = document.getElementById("search").value.toLowerCase()
    const category = document.getElementById("category").value
    document.getElementById("products").innerHTML
    items.filter(p =>
        p.name.toLocaleLowerCase().includes(search)&&
        (category === "All" || p.category === category)
    ).map(p => `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addCart()">Add to Cart</button>
      </div>
    `).join("");
    function addCart(){
    }
    document.getElementById("search").addEventListener("input",showProduct)
    document.getElementById("category").addEventListener("change",showProduct)
        document.getAnimations("cart").textContent = ++cart
}
showProduct()