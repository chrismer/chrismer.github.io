$(document).ready(function() {
    console.log("El DOM está listo");

    if('CARRITO' in localStorage){
        const agregadosCarrito = JSON.parse(localStorage.getItem('CARRITO'));

        for(const producto of agregadosCarrito){
            carrito.push(products.image1, products.nombre,);
        }
    }
    // VARIABLES
    const carrito = [];

    obtenerLocalStorage();

    function obtenerLocalStorage() {
        let carrito = JSON.parse(localStorage.getItem('CARRITO'));
        console.log(carrito);
    }


    function guardarLocalStorage() {

        let carrito = {
            imagen: 'img/foto.jpg',
            nombre: 'hola',
            precio: 200

        }


        localStorage.setItem('CARRITO', JSON.stringify(carrito));
    }
    guardarLocalStorage();
    //CARRITO
    // const carrito = document.getElementById('carrito');
});