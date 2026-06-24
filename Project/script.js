let cart = [];
let total = 0;

function addToCart(name, price){

    cart.push({
        name,
        price
    });

    total += price;

    updateCart();

    showToast(`${name} added to cart 🛒`);
}

function removeItem(index){

    total -= cart[index].price;

    cart.splice(index,1);

    updateCart();
}

function updateCart(){

    const cartItems =
        document.getElementById("cart-items");

    cartItems.innerHTML = "";

    cart.forEach((item,index)=>{

        cartItems.innerHTML += `
        <li>
            <strong>${item.name}</strong><br>
            ₹${item.price}<br>
            <button class="remove-btn"
            onclick="removeItem(${index})">
            Remove
            </button>
        </li>`;
    });

    document.getElementById("cart-count")
        .innerText = cart.length;

    document.getElementById("total")
        .innerText = total;
}

function toggleCart(){

    document.getElementById("cart-sidebar")
        .classList.toggle("active");
}

function showToast(message){

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

function searchProducts() {

    const searchValue = document
        .getElementById("searchInput")
        .value
        .toLowerCase()
        .trim();

    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {

        const productName = product
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if (productName.includes(searchValue)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

document
.getElementById("searchInput")
.addEventListener("input", function () {

    const value = this.value.toLowerCase().trim();

    const products = document.querySelectorAll(".product-card");

    if (value === "") {

        products.forEach(product => {
            product.style.display = "block";
        });
    }
});

document
.getElementById("searchInput")
.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {
        searchProducts();
    }
});