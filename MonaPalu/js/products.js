
let products = [{
        id: 1,
        nombre: 'Barbijos',
        image1: './images/barbijos.jpg',
        image2: './images/barbijos2.jpg',
        old_precio: '400',
        new_precio: '300',
        categoria: 'Accesorios',
        descripcion: 'Esto es un barbijo',
        stock: 10
    },
    {
        id: 2,
        nombre: 'Cofia + Barbijo',
        image1: './images/cofia.jpg',
        image2: './images/cofia2.jpg',
        old_precio: '800',
        new_precio: '600',
        categoria: 'Accesorios',
        descripcion: 'Esto es una cofia y un barbijo',
        stock: 9
    },
    {
        id: 3,
        nombre: 'Mantas',
        image1: './images/MANTA.jpg',
        image2: './images/mantas.jpg',
        old_precio: '1600',
        new_precio: '1500',
        categoria: 'Dormitorio',
        descripcion: 'Esto es una manta',
        stock: 8
    },
    {
        id: 4,
        nombre: 'Nido Contenedor',
        image1: './images/nido.jpg',
        image2: './images/nido2.jpg',
        old_precio: '400',
        new_precio: '300',
        categoria: 'Dormitorio',
        descripcion: 'Esto es un nido',
        stock: 7
    },
    {
        id: 5,
        nombre: 'Porta Macetas',
        image1: './images/porta-maceta.jpg',
        image2: './images/porta-maceta-2.jpg',
        old_precio: '800',
        new_precio: '600',
        categoria: 'Living',
        descripcion: 'Esto es un porta maceta',
        stock: 6
    },
    {
        id: 6,
        nombre: 'Porta Mate',
        image1: './images/porta-mate.jpg',
        image2: './images/porta-mate-2.jpg',
        old_precio: '400',
        new_precio: '300',
        categoria: 'Cocina',
        descripcion: 'Esto es un porta mate',
        stock: 5
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
                            <button id="${e.id}" class="btn-abrir-popup btn-flat btn-hover btn-shop-now">Ver</button>
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
                            <span><del>$${e.old_precio}</del></span>
                            <span class="curr-price">$${e.new_precio}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
            product_list.insertAdjacentHTML("beforeend", prod)
        })
        // POPUP

    let btnAbrirPopup = document.querySelectorAll('.btn-abrir-popup'),
        overlay = document.getElementById('overlay'),
        popup = document.getElementById('popup'),
        popup2 = document.getElementById('popup2'),
        btnCerrarPopup = document.getElementById('btn-cerrar-popup');

    btnAbrirPopup.forEach(e => {
        e.addEventListener('click', function() {
            overlay.classList.add('active');
            popup.classList.add('active');
            let boton = e.getAttribute('id');
            //console.log('el id es', boton);
            let seleccionId = products.filter(el => el.id == boton)
            let detalles = document.createElement('div');

            if (seleccionId) {
                seleccionId.forEach(el => {
                    popup2.innerHTML = ''
                    detalles.innerHTML = `
        <div class="container">
            <div id="productos-renders" data-id="${el.id}" class="row product-row">
                <div class="col-6 col-md-12">
                    <div class="product-img" id="product-img">
                        <img src="${el.image1}" alt="">
                    </div>
                    <div class="box">
                        <div class="product-img-list">
                            <div class="product-img-item">
                                <img src="${el.image1}" alt="">
                            </div>
                            <div class="product-img-item">
                                <img src="${el.image2}" alt="">
                            </div>
                            <div class="product-img-item">
                                <img src="./images/manta5.jpeg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-12">
                    <div class="product-info">
                        <h1>
                        ${el.nombre}
                        </h1>
                        <div class="product-info-detail">
                            <span class="product-info-detail-title">Categoria:</span>
                            <a href="#">${el.categoria}</a>
                        </div>
                        <div class="product-info-detail">
                            <span class="product-info-detail-title">Ranking:</span>
                            <span class="rating">
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                                <i class='bx bxs-star'></i>
                            </span>
                        </div>
                        <p class="product-description">
                            ${el.descripcion}
                        </p>
                        <div id="precio" class="product-info-price">${el.new_precio}</div>
                        <div class="product-quantity-wrapper">
                            <span class="product-quantity-btn disminuir">
                                <i class='bx bx-minus'></i>
                            </span>
                            <span id="valor" class="product-quantity">1</span>
                            <span class="product-quantity-btn aumentar">
                                <i class='bx bx-plus'></i>
                            </span>
                            <span id="stock" class="product-info-detail-title">${el.stock}</span>
                            <span class="product-info-detail-title">disponibles</span>
                        </div>
                        <div class="button-cart">
                            <button id="button" class="agregar-al-carrito button">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="box-header">
                    Descripción
                </div>
                <div class="product-detail-description">
                    <button class="btn-flat btn-hover btn-view-description" id="view-all-description">
                        Ver todo
                    </button>
                    <div class="product-detail-description-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium obcaecati odit dolorem, doloremque accusamus esse neque ipsa dignissimos saepe quisquam tempore perferendis deserunt sapiente! Recusandae illum totam earum ratione. Lorem ipsum
                            dolor sit, amet consectetur adipisicing elit. Aliquam incidunt maxime rerum reprehenderit voluptas asperiores ipsam quas consequuntur maiores, at odit obcaecati vero sunt! Reiciendis aperiam perferendis consequuntur odio quas.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat eum veniam doloremque nihil repudiandae odio ratione culpa libero tempora. Expedita, quo molestias. Minus illo quis dignissimos aliquid sapiente error!
                        </p>
                        <img src="${el.image1}">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusantium officia, quae fuga in exercitationem aliquam labore ex doloribus repellendus beatae facilis ipsam. Veritatis vero obcaecati iste atque aspernatur ducimus. Lorem ipsum dolor sit,
                            amet consectetur adipisicing elit. Repellat quam praesentium id sit amet magnam ad, dolorum, cumque iste optio itaque expedita eius similique, ab adipisci dicta. Quod, quibusdam quas. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Odit, in corrupti ipsam sint error possimus commodi incidunt suscipit sit voluptatum quibusdam enim eligendi animi deserunt recusandae earum natus voluptas blanditiis?
                        </p>
                        <img src="${el.image2}">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ullam quam fugit veniam ipsum recusandae incidunt, ex ratione, magnam labore ad tenetur officia! In, totam. Molestias sapiente deserunt animi porro?
                        </p>
                    </div>
                </div>
            </div>

            <div class="box">
                <div class="box-header">
                    Productos Relacionados
                </div>
                <div class="row" id="related-products"></div>
            </div>
        </div>    
        
        
        `;
                })
            }
            popup2.appendChild(detalles);
            document.querySelectorAll('.product-img-item').forEach(e => {
                e.addEventListener('click', () => {
                    let img = e.querySelector('img').getAttribute('src')
                    document.querySelector('#product-img > img').setAttribute('src', img)
                })
            })

            document.querySelector('#view-all-description').addEventListener('click', () => {
                let content = document.querySelector('.product-detail-description-content')
                content.classList.toggle('active')
                document.querySelector('#view-all-description').innerHTML = content.classList.contains('active') ? 'Ver menos' : 'Ver todo'
            })

            //CONTADORES
            let contador = 1;
            let precioActual = document.querySelector('#precio');
            let total = precioActual.textContent;
            let resultado;
            valorReal = products.find(pro => pro.new_precio)
                //console.log(valorReal.new_precio);
            let stock = document.getElementById('stock').textContent;
            //console.log(stock);
            const valor = document.querySelector('#valor'),
                botones = document.querySelectorAll('.product-quantity-btn');
            botones.forEach(boton => {

                //precioActual.innerHTML = resultado
                let valorReal = products.find(pro => pro.new_precio.includes(precioActual.textContent))
                    //console.log(valorReal.new_precio);
                let stockReal = products.find(prod => prod.stock == stock);
                //console.log(stockReal.stock);
                boton.addEventListener('click', function(e) {
                    const estilos = e.currentTarget.classList;
                    //console.log(estilos);

                    if (estilos.contains('disminuir') && contador > 1) {
                        contador--;
                        resultado = resultado - valorReal.new_precio;
                        stock++;
                        console.log(stock);
                    } else if (estilos.contains('aumentar') && contador < stockReal.stock) {
                        contador++;
                        stock--;
                        console.log(stock);
                        total = valorReal.new_precio * contador;

                        resultado = total;


                        //console.log(precioActual, total, resultado);
                    } else if (valor.textContent == 1) {
                        contador = 1;
                        resultado = valorReal.new_precio * contador
                            // precioActual.innerHTML = valorReal.new_precio;
                    }
                    valor.textContent = contador;
                    precioActual.innerHTML = resultado;
                    console.log(precioActual, total);
                })
            })

            //boton prueba
            let botonCarrito = document.getElementById('button');
            //console.log(botonCarrito);
            let productosRenders = document.getElementById('products');
            if (botonCarrito in productosRenders){
                //console.log('esta aca');
            }else{
                //console.log('no esta cargado');
                
            }
            $(".button").click(function () { 
                $(this).addClass("active");
                
                setTimeout(function(){
                    $(".button").addClass("success");
                }, 3500);
                setTimeout(function(){
                    $(".button").removeClass("active");
                    $(".button").removeClass("success")
                },5500);
            });

        })

    })


    btnCerrarPopup.addEventListener('click', function(e) {
        e.preventDefault();
        overlay.classList.remove('active');
        popup.classList.remove('active');
    });
}



//RENDERIZADOS
renderProducts(products);
renderProducts(products);

// columnas responsive
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

}

formulario.addEventListener('keyup', filtrar)


// SELECTED
const filterSelect = ['Mas Relevantes', 'Mayor Precio', 'Menor Precio'];

const filtradoSelect = document.getElementById('selecciones');

for(const selected of filterSelect){
    let option = document.createElement('option');

    option.innerHTML = selected;

    filtradoSelect.appendChild(option);

}




