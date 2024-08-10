const quantity  = document.getElementById('quantity');

console.log(quantity.textContent)


// function 

function increment(title , price , sousTitle) {
    quantity.textContent = parseInt(quantity.textContent) + 1
    console.log(title , price , sousTitle);

const selecteditem = document.createElement('div');

selecteditem.innerHTML = `
<div class="cart-item">

    <div class="cart-item-details">
        <h4>${title}</h4>
        <h4>${price}</h4>
    </div>
   
</div>
`;
const  cart = document.querySelector('.cart');
cart.appendChild(selecteditem);
}


//


// // create new element





function decrement() {

    if (parseInt(quantity.textContent) > 0) {
        quantity.textContent = parseInt(quantity.textContent) - 1
    }
}





// // function add to cart 
// function addToCart() {
//     const image = document.getElementById('image').src;
//     const price = document.getElementById('price').textContent;
//     const title = document.getElementById('title').textContent;


//     // Add the cart item to the cart

//     const  selectedItem = document.createElement('div');
//     selectedItem.innerHTML = `
//     <div class="cart-item">
//         <img src="${image}" alt="product">
//         <div class="cart-item-details">
//             <h4>${title}</h4>
//             <h4>${price}</h4>
//         </div>
//         <div class="cart-item-actions">
//             <button class="remove-item">Remove</button>
//         </div>
//     </div>
//     `;

//     const cart = document.getElementById('cart');

// }