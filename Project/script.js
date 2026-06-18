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