let carts = document.querySelectorAll('.add-to-cart');

let products = [{
        nom: "1 henna cone",
        prix: 2,
        tag: '1cone',
        incart: 0
    },
    {
        nom: "Set de 3 cones",
        prix: 5,
        tag: '3cone',
        incart: 0
    },
    {
        nom: "Set de 5 cones",
        prix: 8.50,
        tag: '5cone',
        incart: 0
    },
    {
        nom: "Set de 10 cones",
        prix: 17,
        tag: '10cone',
        incart: 0
    },
    {
        nom: "Set de 20 cones",
        prix: 30,
        tag: '20cone',
        incart: 0
    }
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.panier span').textContent = productNumbers;

    }
};

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);


    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.panier span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.panier span').textContent = 1;

    }
    setItems(product)
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }

        cartItems[product.tag].inCart += 1;
    } else {

        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCoast');
    cartCost = parseInt(cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.prix)
    } else {

        localStorage.setItem("totalCost", product.prix)
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCoast');


    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `<div class="product">
            <i class="fas fa-times"></i>
<img src="./assets/img/${item.tag}.jpeg">
<span>${item.name}</span>
</div>
<div class="price">${item.prix}</div>
<div class="quantity"><i class="fas fa-sort-down"></i><span>
${item.inCart}</span><i class="fas fa-sort-up"></i></div>
<div class="total">${item.inCart * item.prix}</div>`
        });
        productContainer.innerHTML += `
 <div class="basketTotalContainer">
 <h4 class="basketTotalTitle">Total Panier</h4>
 <h4 class="basketTotal"></h4>${cartCost}</div>`
    }
}
onLoadCartNumbers();
displayCart();



// /------------------------------------------/ 
var element = document.getElementsByClassName("trie");

    function trier( event ) {
        var element = document.querySelector(".active");
        var target = $( event.target );
        if ( target.is( "ul" ) ) {
          target.children().toggle();
        }
      }
    

    //   -----------------------------
// prix croissant

products.sort((product1, product2) => product2.prix - product1).prix;

// prix decroissant
products.sort((prod1, prod2) => prod2.prix - prod1.prix);

