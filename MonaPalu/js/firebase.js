// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCqkUAEBPsZeZLHuOsDE4gkoFO9211pZSg",
    authDomain: "monapalu-429b9.firebaseapp.com",
    projectId: "monapalu-429b9",
    storageBucket: "monapalu-429b9.appspot.com",
    messagingSenderId: "92989502500",
    appId: "1:92989502500:web:0bd6070ea6939f2a7554b1"
  });
  
  var db = firebase.firestore();


  // LEER PRODUCTOS
  let productos_list = document.querySelector('#products')
  const productosTotal =[];
  

  db.collection("productos").get().then((querySnapshot) => {
    
    productos_list.innerHTML= '';
    querySnapshot.forEach((doc) => {
      productosTotal.push(doc.data())
      localStorage.setItem('TotalProductos', JSON.stringify(productosTotal));
      // console.log(doc.data());
      // console.log(productosTotal);

        // console.log(`${doc.id} => ${doc.data().nombre}`);
        productos_list.innerHTML += `
        <div class="col-4 col-md-6 col-sm-12" data-categoria="${doc.data().categoria}">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${doc.data().image1}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <button id="${doc.data().id}" class="btn-flat btn-hover btn-shop-now" data-bs-toggle="modal" data-bs-target="#datosModal">Ver</button>
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">Comprar</a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                            ${doc.data().nombre}
                        </div>
                        <div class="product-card-price">
                            <span><del>$${doc.data().old_precio}</del></span>
                            <span class="curr-price">$${doc.data().new_precio}</span>
                        </div>
                    </div>
                </div>
            </div>
            `;
            
      });
});

console.log(productosTotal);

let traer = JSON.parse(localStorage.getItem('TotalProductos'));
console.log(traer[0].nombre);
traer.forEach(e=>{
  console.log(e.nombre);

})

//probando modal
let modal= document.querySelectorAll('.btn-shop-now');
//console.log(modal);
modal.forEach(el=>{
  console.log(el[0]);
  el.addEventListener('click', function(){
    let mostrarModal = document.getElementById('datosModal');
    mostrarModal.innerHTML=`
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">TITULO</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
    `;

  })
})




