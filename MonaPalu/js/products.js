let products = [{
        nombre: 'Barbijos',
        image1: './images/barbijos.jpg',
        image2: './images/barbijos2.jpg',
        old_precio: '400',
        new_precio: '300',
        categoria: 'Accesorios'
    },
    {
        nombre: 'Cofia + Barbijo',
        image1: './images/cofia.jpg',
        image2: './images/cofia2.jpg',
        old_precio: '800',
        new_precio: '600',
        categoria: 'Accesorios'
    },
    {
        nombre: 'Mantas',
        image1: './images/MANTA.jpg',
        image2: './images/mantas.jpg',
        old_precio: '1600',
        new_precio: '1500',
        categoria: 'Dormitorio'
    },
    {
        nombre: 'Nido Contenedor',
        image1: './images/nido.jpg',
        image2: './images/nido2.jpg',
        old_precio: '400',
        new_precio: '300',
        categoria: 'Dormitorio'
    },
    {
        nombre: 'Porta Macetas',
        image1: './images/porta-maceta.jpg',
        image2: './images/porta-maceta-2.jpg',
        old_precio: '800',
        new_precio: '600',
        categoria: 'Living'
    },
    {
        nombre: 'Porta Mate',
        image1: './images/porta-mate.jpg',
        image2: './images/porta-mate-2.jpg',
        old_precio: '400',
        new_precio: '300',
        categoria: 'Cocina'
    },
]

let product_list = document.querySelector('#products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12" data-categoria="${e.categoria}">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">Comprar</a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                            ${e.nombre}
                        </div>
                        <div class="product-card-price">
                            <span><del>${e.old_precio}</del></span>
                            <span class="curr-price">${e.new_precio}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(products);
renderProducts(products);

let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))

// filter categorias
//parte3
const categoriasEvent = (e) => {
    e.preventDefault();
    objetivo = e.target.text;
    product_list.innerHTML = '';

    let empty = products.find(el => el.categoria == objetivo)
    if (!empty) {
        renderProducts(products)
            //console.log('hola');
    }


    if (objetivo == "Todos") {
        renderProducts(products)

    } else {
        let seleccion = products.filter(el => el.categoria == objetivo)
            //console.log(seleccion)
        renderProducts(seleccion)
    }
}
document.querySelector('.filter-list').addEventListener('click', categoriasEvent)


// INPUT SEARCH

const formulario = document.querySelector('#busquedaProducto');
const filtrar = () => {
    product_list.innerHTML = '';
    const texto = formulario.value.toLowerCase();
    let select = products.filter(el => el.nombre.toLowerCase().includes(texto))
    if (select) {
        renderProducts(select)
    }
    // let nombre = '';
    // for (let producto of products) {
    //     nombre = producto.nombre.toLowerCase();
    //     // renderProducts(select);
    //     if (nombre.indexOf(texto) !== -1) {
    //         console.log('hola');
    //     }
    // }
}

formulario.addEventListener('keyup', filtrar)
    // filtrar();

/*
document.getElementById('busquedaProducto').addEventListener("keyup", function() {

    product_list.innerHTML = '';

    let select = products.filter(el => el.nombre.includes(this.value.toLowerCase()))

    if (select) {
        product_list = renderProducts(select);
    } else if (product_list == undefined) {

        renderProducts(products)

    }

    // let vacio = products.find(ele => ele.nombre == this.value.toUpperCase)
    // if (!vacio) {
    // }
});*/



// let buscar = document.addEventListener('keyup', (e) => {
//     if (e.target.matches('.card-filter')) {
//         let select = products.filter(el => el.nombre == e.target.value)
//         renderProducts(select)

//     }
// })

// function searchFilters(input, selector) {
/*document.addEventListener("keyup", (e) => {
    if (e.target.matches('.card-filter')) {
        document.querySelectorAll('.product-card-name').forEach(el =>
            el.textContent.toLowerCase().includes(e.target.value) ? console.log('exito') : console.error('mal')

        );
    }
})*/

// }
// searchFilters(".card-filter", ".product-card-name");





//let categorias = document.querySelector('.filter-list').addEventListener('click', (e) => {

/* funciona joya
e.preventDefault();
objetivo = e.target.text;
product_list.innerHTML = '';
if (objetivo == "Todos") {
    renderProducts(products)
    renderProducts(products)
} else {
    let seleccion = products.filter(el => el.categoria == objetivo)
    console.log(seleccion)
    renderProducts(seleccion)
}*/



/*e.preventDefault();
objetivo = e.target.text;
//console.log(objetivo);
product_list.innerHTML = '';
products.forEach(event => {
    //console.log(event.categoria);

    let dataCategoria = event.categoria;
    //console.log(dataCategoria);
    if (dataCategoria == objetivo) {
        //console.log('son iguales');

        product_list.innerHTML += `
        <div class="col-4 col-md-6 col-sm-12" data-categoria="${event.categoria}">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${event.image1}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">Comprar</a>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${event.nombre}
                    </div>
                    <div class="product-card-price">
                        <span><del>${event.old_precio}</del></span>
                        <span class="curr-price">${event.new_precio}</span>
                    </div>
                </div>
            </div>
        </div>
    `
    } else if (objetivo == 'Todos') {
        //console.log('soy todo');
        products.list = renderProducts(products)
            // product_list.innerHTML(renderProducts(products), renderProducts(products));
    } else if (objetivo !== dataCategoria.includes(objetivo)) {
        console.log('no estoy');
    }

})
for (const obj of products) {
    if (objetivo !== obj.categoria) {
        console.log('soy distinto');
    }
    //console.log(obj.categoria);
}*/
// })