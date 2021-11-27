AOS.init();

//slides
let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// RENDER Y CARRITO
const productDOM = document.querySelector(".product__center");
const cartDOM = document.querySelector(".cart");
const cartContent = document.querySelector(".cart__centent");
const openCart = document.querySelector(".cart__icon");
const closeCart = document.querySelector(".close__cart");
const overlay = document.querySelector(".cart__overlay");
const cartTotal = document.querySelector(".cart__total");
const clearCartBtn = document.querySelector(".clear__cart");
const itemTotals = document.querySelector(".item__total");

let cart = [];

let buttonDOM = [];

class UI {
  displayProducts(products) {
    let results = "";
    products.forEach(({ title, price, image, id, categoria }) => {
      results += `<!-- Single Product -->
        <div class="item product" data-categoria="${categoria}">
           
                <div class="item-content">
                    <div class="image__container">
                        <img src="${image}" alt="" />
                    </div>
                    <div class="product__footer">
                        <h1>${title}</h1>
                        <div class="rating">
                            <span>
                            <svg>
                                <use xlink:href="./img/sprite.svg#icon-star-full"></use>
                            </svg>
                            </span>
                            <span>
                            <svg>
                                <use xlink:href="./img/sprite.svg#icon-star-full"></use>
                            </svg>
                            </span>
                            <span>
                            <svg>
                                <use xlink:href="./img/sprite.svg#icon-star-full"></use>
                            </svg>
                            </span>
                            <span>
                            <svg>
                                <use xlink:href="./img/sprite.svg#icon-star-full"></use>
                            </svg>
                            </span>
                            <span>
                            <svg>
                                <use xlink:href="./img/sprite.svg#icon-star-empty"></use>
                            </svg>
                            </span>
                        </div>
                        <div class="bottom">
                            <div class="btn__group">
                            <button class="btn addToCart" data-id= "${id}" >Comprar</button>
                            <button class="btn view">Ver</button>
                            </div>
                            <div class="price">$${price}</div>
                        </div>
                    </div>
                </div>    
              
        </div>
      <!-- End of Single Product -->`;
    });

    productDOM.innerHTML = results;

    //FILTRANDO 
    const enlaces = document.querySelectorAll('.filter a');
    enlaces.forEach(el =>{
      el.addEventListener('click', (evento)=>{
        evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
			evento.target.classList.add('activo');

            let category = evento.target.textContent.toLowerCase();
            console.log(category);
            let filtroCategory = products.filter(e => e.categoria.includes(category))
            console.log(filtroCategory);
            let filtroFind = products.find(el=> el.categoria == category)
            productDOM.innerHTML=''
            if(category=='todos'){
              productDOM.innerHTML=results;
              this.getButtons()
            } else if (filtroCategory){
              filtroCategory.forEach(el=>{
                productDOM.innerHTML += `<!-- Single Product -->
                <div class="item product" data-categoria="${el.categoria}">
                   
                        <div class="item-content">
                            <div class="image__container">
                                <img src="${el.image}" alt="" />
                            </div>
                            <div class="product__footer">
                                <h1>${el.title}</h1>
                                <div class="rating">
                                    <span>
                                    <svg>
                                        <use xlink:href="./img/sprite.svg#icon-star-full"></use>
                                    </svg>
                                    </span>
                                    <span>
                                    <svg>
                                        <use xlink:href="./img/sprite.svg#icon-star-full"></use>
                                    </svg>
                                    </span>
                                    <span>
                                    <svg>
                                        <use xlink:href="./img/sprite.svg#icon-star-full"></use>
                                    </svg>
                                    </span>
                                    <span>
                                    <svg>
                                        <use xlink:href="./img/sprite.svg#icon-star-full"></use>
                                    </svg>
                                    </span>
                                    <span>
                                    <svg>
                                        <use xlink:href="./img/sprite.svg#icon-star-empty"></use>
                                    </svg>
                                    </span>
                                </div>
                                <div class="bottom">
                                    <div class="btn__group">
                                    <button class="btn addToCart" data-id= "${el.id}" >Comprar</button>
                                    <button class="btn view">Ver</button>
                                    </div>
                                    <div class="price">$${el.price}</div>
                                </div>
                            </div>
                        </div>    
                      
                </div>
              <!-- End of Single Product -->`;
              this.getButtons()
              })

            } 
            if(!filtroFind && category !== 'todos'){

                productDOM.innerHTML = `<!-- Single Product -->
                <div class="item product">                   
                  <div class="item-content">
                    <div class="image__container">
                        <img src="img/MonaLogo.png" alt="" />
                    </div>
                    <div class="product__footer">
                        <h1>Sin Resultados</h1>
                    </div>
                  </div>                      
                </div>
              <!-- End of Single Product -->`;;
              
            }
            
      })
    
    })
    
    //INPUT SEARCH
    const buscando = document.getElementById('search-box');
    const filtrar = () => {
    // function filtrar(){
    productDOM.innerHTML = '';
    const texto = buscando.value.toLowerCase();
    let select = products.filter(el => el.title.toLowerCase().includes(texto))
    if (select) {
       select.forEach(el => {
        productDOM.innerHTML += `<!-- Single Product -->
                <div class="product" data-categoria="${el.categoria}">
                   
                        <div class="item-content">
                            <div class="image__container">
                                <img src="${el.image}" alt="" />
                            </div>
                            <div class="product__footer">
                                <h1>${el.title}</h1>
                                <div class="rating">
                                    <span>
                                    <svg>
                                        <use xlink:href="./img/sprite.svg#icon-star-full"></use>
                                    </svg>
                                    </span>
                                    <span>
                                    <svg>
                                        <use xlink:href="./img/sprite.svg#icon-star-full"></use>
                                    </svg>
                                    </span>
                                    <span>
                                    <svg>
                                        <use xlink:href="./img/sprite.svg#icon-star-full"></use>
                                    </svg>
                                    </span>
                                    <span>
                                    <svg>
                                        <use xlink:href="./img/sprite.svg#icon-star-full"></use>
                                    </svg>
                                    </span>
                                    <span>
                                    <svg>
                                        <use xlink:href="./img/sprite.svg#icon-star-empty"></use>
                                    </svg>
                                    </span>
                                </div>
                                <div class="bottom">
                                    <div class="btn__group">
                                    <button class="btn addToCart" data-id= "${el.id}" >Comprar</button>
                                    <button class="btn view">Ver</button>
                                    </div>
                                    <div class="price">$${el.price}</div>
                                </div>
                            </div>
                        </div>    
                      
                </div>
              <!-- End of Single Product -->`;
              this.getButtons()
            })
    }

}

buscando.addEventListener('keyup', filtrar)
  }

  getButtons() {
    const buttons = [...document.querySelectorAll(".addToCart")];
    buttonDOM = buttons;
    buttons.forEach(button => {
      const id = button.dataset.id;
      const inCart = cart.find(item => item.id === parseInt(id, 10));

      if (inCart) {
        button.innerText = "En Carrito";
        button.disabled = true;
      }

      button.addEventListener("click", e => {
        e.preventDefault();
        e.target.innerHTML = "En Carrito";
        e.target.disabled = true;

        // Obteniendo productos de  products
        const cartItem = { ...Storage.getProduct(id), amount: 1 };

        // Agregando al carrito
        cart = [...cart, cartItem];

        // Guardando carrito en local storage
        Storage.saveCart(cart);
        // Enviando valores al carrito
        this.setItemValues(cart);
        // Mostrando los items
        this.addCartItem(cartItem);
        // Mostrar el carrito...
      });
    });
  }

  setItemValues(cart) {
    let tempTotal = 0;
    let itemTotal = 0;

    cart.map(item => {
      tempTotal += item.price * item.amount;
      itemTotal += item.amount;
    });
    cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
    itemTotals.innerText = itemTotal;
  }

  addCartItem({ image, price, title, id }) {
    const div = document.createElement("div");
    div.classList.add("cart__item");

    div.innerHTML = `<img src=${image}>
          <div>
            <h3>${title}</h3>
            <h3 class="price">$${price}</h3>
          </div>
          <div>
            <span class="increase" data-id=${id}>
              <svg>
                <use xlink:href="./img/sprite.svg#icon-angle-up"></use>
              </svg>
            </span>
            <p class="item__amount">1</p>
            <span class="decrease" data-id=${id}>
              <svg>
                <use xlink:href="./img/sprite.svg#icon-angle-down"></use>
              </svg>
            </span>
          </div>

            <span class="remove__item" data-id=${id}>
              <svg>
                <use xlink:href="./img/sprite.svg#icon-trash"></use>
              </svg>
            </span>

        </div>`;
    cartContent.appendChild(div);
  }

  show() {
    cartDOM.classList.add("show");
    overlay.classList.add("show");
  }

  hide() {
    cartDOM.classList.remove("show");
    overlay.classList.remove("show");
  }

  setAPP() {
    cart = Storage.getCart();
    this.setItemValues(cart);
    this.populate(cart);

    openCart.addEventListener("click", this.show);
    closeCart.addEventListener("click", this.hide);
  }

  populate(cart) {
    cart.forEach(item => this.addCartItem(item));
  }

  cartLogic() {
    // Borrar carrito
    clearCartBtn.addEventListener("click", () => {
      this.clearCart();
      this.hide();
    });

    // Carrito Funcionando...
    cartContent.addEventListener("click", e => {
      const target = e.target.closest("span");
      const targetElement = target.classList.contains("remove__item");
      if (!target) return;

      if (targetElement) {
        const id = parseInt(target.dataset.id);
        this.removeItem(id);
        cartContent.removeChild(target.parentElement);
      } else if (target.classList.contains("increase")) {
        const id = parseInt(target.dataset.id, 10);
        let tempItem = cart.find(item => item.id === id);
        tempItem.amount++;
        Storage.saveCart(cart);
        this.setItemValues(cart);
        target.nextElementSibling.innerText = tempItem.amount;
      } else if (target.classList.contains("decrease")) {
        const id = parseInt(target.dataset.id, 10);
        let tempItem = cart.find(item => item.id === id);
        tempItem.amount--;

        if (tempItem.amount > 0) {
          Storage.saveCart(cart);
          this.setItemValues(cart);
          target.previousElementSibling.innerText = tempItem.amount;
        } else {
          this.removeItem(id);
          cartContent.removeChild(target.parentElement.parentElement);
        }
      }
    });
  }

  clearCart() {
    const cartItems = cart.map(item => item.id);
    cartItems.forEach(id => this.removeItem(id));

    while (cartContent.children.length > 0) {
      cartContent.removeChild(cartContent.children[0]);
    }
  }

  removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    this.setItemValues(cart);
    Storage.saveCart(cart);

    let button = this.singleButton(id);
    button.disabled = false;
    button.innerText = "Comprar";
  }

  singleButton(id) {
    return buttonDOM.find(button => parseInt(button.dataset.id) === id);
  }
}

//ENVIANDO DATA
const confirmacion = document.getElementById('confirmarCompra');
confirmacion.addEventListener('click', function(e){

    confirmacion.innerHTML= `<div class="spinner-border text-secondary" role="status">
                              <span class="visually-hidden">Loading...</span>
                            </div>`
    setTimeout(function(){
      confirmacion.style.display = "none";
    },1500)
 
//REALIZAMOS LA PETICION POST
const URLPOST = 'https://jsonplaceholder.typicode.com/posts';
//INFORMACION A ENVIAR
const DATA   = {productos: JSON.stringify(cartContent)};

const notificando = document.getElementById('notificaciones');

fetch(URLPOST, {
  method: 'POST', 
  body: JSON.stringify(DATA), 
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => {
      
    notificando.innerHTML= `<div class="alert alert-success alert-dismissible fade show" role="alert">
                              <strong>COMPRA CONFIRMADA!</strong> Comprobante Nº ${response.id}.
                              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                              </button>
                            </div>` 
                      
    setTimeout(function(){
      notificando.innerHTML=''
    },2500)
  
  console.log('Success:', response)
  

});


//VACIAR EL CARRITO!!
class eliminando extends UI{
  byeBye(){
    this.clearCart();
    this.hide();
  }
}
let eliminacion = new eliminando();
setTimeout(function(){

  eliminacion.byeBye();
  location.reload();
}, 4000)

});

class Products {
  async getProducts() {
    try {
      const result = await fetch("../products.json");
      const data = await result.json();
      const products = data.items;
      return products;
    } catch (err) {
      console.log(err);
    }
  }
}

class Storage {
  static saveProduct(obj) {
    localStorage.setItem("products", JSON.stringify(obj));
  }

  static saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  static getProduct(id) {
    const products = JSON.parse(localStorage.getItem("products"));
    return products.find(product => product.id === parseFloat(id, 10));
  }

  static getCart() {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const productList = new Products();
  const ui = new UI();

  ui.setAPP();

  const products = await productList.getProducts();
  ui.displayProducts(products);
  Storage.saveProduct(products);
  ui.getButtons();
  ui.cartLogic();
});
