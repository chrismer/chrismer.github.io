// NAVBAR SCROLL
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

// MOSTRAR ELEMENTOS OCULTOS ABOUT
let show = document.querySelectorAll('.show');

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (i = 0; i < show.length; i++) {
        let alturaAnimado = show[i].offsetTop;
        if (alturaAnimado - 500 < scrollTop) {
            show[i].style.opacity = 1;
            show[i].classList.add("showArriba");

        }
    }

}

window.addEventListener('scroll', mostrarScroll);

// ACORDEONES

const accordion = document.getElementsByClassName('accordion__contentBx');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}

// NEW MENU
const menuBtn = document.querySelector('.menu-btn');
const hamburguer = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.menu-nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburguer.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburguer.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}


//COUNTERS
mostrarContador = document.querySelector('#about').addEventListener('mouseover', mostrarlo);

function mostrarlo() {
    const speed = 2000;
    document.querySelectorAll('#counter').forEach(counter => {

        const counterNumber = +counter.getAttribute('countTo');

        const updateCount = setInterval(() => {
            const divContent = +counter.innerText;
            const increaseBy = counterNumber / speed;

            divContent < counterNumber ?
                counter.innerHTML = Math.ceil(divContent + increaseBy) :
                clearInterval(updateCount);
        }, 1);
    });
};


window.onload = load;

function load() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        const speed = 2000;

        document.querySelectorAll('#counter').forEach(counter => {

            const counterNumber = +counter.getAttribute('countTo');

            const updateCount = setInterval(() => {
                const divContent = +counter.innerText;
                const increaseBy = counterNumber / speed;

                divContent < counterNumber ?
                    counter.innerHTML = Math.ceil(divContent + increaseBy) :
                    clearInterval(updateCount);
            }, 1);
        });
    };
};