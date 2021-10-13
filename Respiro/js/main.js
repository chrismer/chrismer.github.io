let menuToggle = document.querySelector('.menuToggle');
let navigation = document.querySelector('.nav');

menuToggle.onclick = function() {
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}