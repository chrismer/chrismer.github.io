let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pause slide when hover slider

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// enable slide when mouse leave out slider
document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// slider controll

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

// setInterval(() => {
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products

let products = [{
        name: 'Barbijos',
        image1: './images/barbijos.jpg',
        image2: './images/barbijos2.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Cofia + Barbijo',
        image1: './images/cofia.jpg',
        image2: './images/cofia2.jpg',
        old_price: '800',
        curr_price: '600'
    },
    {
        name: 'Mantas',
        image1: './images/MANTA.jpg',
        image2: './images/mantas.jpg',
        old_price: '1600',
        curr_price: '1500'
    },
    {
        name: 'Nido Contenedor',
        image1: './images/nido.jpg',
        image2: './images/nido2.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Porta Macetas',
        image1: './images/porta-maceta.jpg',
        image2: './images/porta-maceta-2.jpg',
        old_price: '800',
        curr_price: '600'
    },
    {
        name: 'Porta Mate',
        image1: './images/porta-mate.jpg',
        image2: './images/porta-mate-2.jpg',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'Turbantes de Toalla',
        image1: './images/turbante.jpg',
        image2: './images/turbante2.jpg',
        old_price: '600',
        curr_price: '500'
    },
]

let product_list = document.querySelector('#latest-products')
let best_product_list = document.querySelector('#best-products')

products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">Comprar</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="product-card-name">
                        ${e.name}
                    </div>
                    <div class="product-card-price">
                        <span><del>$${e.old_price}</del></span>
                        <span class="curr-price">$${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `

    product_list.insertAdjacentHTML("beforeend", prod)
    best_product_list.insertAdjacentHTML("afterbegin", prod)
})