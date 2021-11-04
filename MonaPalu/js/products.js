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
                        <img src="${e.image2}" alt="">
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
let categorias = document.querySelector('.filter-list').addEventListener('click', (e) => {
    e.preventDefault();
    objetivo = e.target.text;
    //console.log(objetivo);
    product_list.innerHTML = '';
    products.forEach(event => {
        //console.log(event.categoria);
        let dataCategoria = event.categoria;
        //console.log(dataCategoria);
        if (dataCategoria == objetivo) {
            console.log('son iguales');

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
        }

        // let productoFilter = document.querySelectorAll('[data-categoria]');

        // productoFilter.forEach(el => {
        //     if (event.categoria == objetivo) {

        //     } else {
        //         //el.filter(`[data-categoria]=${event.categoria}`)
        //     }
        // })

    })
})