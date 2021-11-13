const carrito = document.getElementById('carrito');
const productosGral= document.getElementById('products');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const verCarritoTotal = document.getElementById('carrito-total');

btnAbrirPopup = document.querySelectorAll('.btn-abrir-popup');
ventanaPopup= document.getElementById('popup');

        if(ventanaPopup.classList.contains('active')){
             cargarEventListeners();
             console.log(ventanaPopup);
        }




// cargarEventListeners();

function cargarEventListeners(){
    productosGral.addEventListener('click', comprandoProductos);
    carrito.addEventListener('click', eliminarCompra);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    document.addEventListener('DOMContentLoaded', leerLocalStorage);
}

 function comprandoProductos(e){
     e.preventDefault();
     if(productosGral.classList.contains('.btn-abrir-popup')){
           const fuckinBoton = document.querySelector('.button');
           fuckinBoton.addEventListener('click', e =>{
            const product = e.target.parentElement.parentElement.parentElement;
            leerDatosProductos(product);
           }) 
//         const product = e.target.parentElement.parentElement.parentElement.parentElement;
//         leerDatosProductos(product);
//         console.log(product);
    }
}

function comprandoProductos(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-al-carrito')){
        const product = e.target.parentElement.parentElement.parentElement.parentElement;
        leerDatosProductos(product);
        console.log(product);
    }
}

function leerDatosProductos(product){
    const infoProducto={
        imagen: product.querySelector('img').src,
        titulo: product.querySelector('h1').textContent,
        cantidad: product.getElementById('valor').textContent,
        precio: product.getElementById('precio').textContent,
        id: product.querySelector('div').getAttribute('data-id')
    }
    console.log(infoProducto);
    insertarCarrito(infoProducto);
}

function insertarCarrito(product){
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
        <img src="${product.imagen}" width=100>
    </td>
    <td>${product.titulo}</td>
    <td>${product.cantidad}</td>
    <td>${product.precio}</td>
    <td>
        <a href="#" class="borrar-producto" data-id="${product.id}">X</a>
    </td>
    `;
    listaCarrito.appendChild(row);
    guardarProductosLocalStorage(product);
}

function eliminarCompra(e){
    e.preventDefault();

    let producto,
        productoId;

    if (e.target.classList.contains('borrar-producto')) {
        e.target.parentElement.parentElement.parentElement.remove();
        producto= e.target.parentElement.parentElement.parentElement.parentElement;
        productoId= producto.querySelector('div').getAttribute('data-id');
    }
    eliminarProductoLocalStorage(productoId)
}

function vaciarCarrito(){
    while (listaCarrito.firstChild){
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
    vaciarLocalStorage();
    return false;
}

function guardarProductosLocalStorage(product){
    let productos;

    productos = obtenerProductosLocalStorage();
    productos.push(product);

    localStorage.setItem('PRODUCTOS', JSON.stringify(productos))
}

function obtenerProductosLocalStorage(){
    let productosLS;

    if(localStorage.getItem('productos') === null){
        productosLS = [];
    }else{
        productosLS = JSON.parse(localStorage.getItem('productos'));
    }
    return productosLS;
}

function leerLocalStorage(){
    let productosLS;

    productosLS = obtenerProductosLocalStorage();

    productosLS.forEach(function(product){
        const row = document.createElement('tr');
        row.innerHTML= `
        <td>
            <img src="${product.imagen}" width=100>
        </td>
        <td>${product.titulo}</td>
        <td>${product.cantidad}</td>
        <td>${product.precio}</td>
        <td>
            <a href="#" class="borrar-producto" data-id="${product.id}">X</a>
        </td>
        `;
        listaCarrito.appendChild(row);
    });
}

function eliminarProductoLocalStorage(product){
    let productosLS;

    productosLS = obtenerProductosLocalStorage();

    productosLS.forEach(function(productosLS, index){
        if (productosLS.id === product){
            productosLS.splice(index, 1);
        }
    });
    localStorage.setItem('productos', JSON.stringify(productosLS));
}

function vaciarLocalStorage(){
    localStorage.clear();
}

$(document).ready(function(){

    console.log(product_list);
})
