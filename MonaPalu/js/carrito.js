$(document).ready(function() {
    console.log("El DOM está listo");

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