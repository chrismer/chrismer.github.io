// codigo pagina HTML
const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');

    // Agregamos los listener de los enlaces para filtrar por categoria.
    const enlaces = document.querySelectorAll('#categorias a');
    enlaces.forEach((elemento) => {
        elemento.addEventListener('click', (evento) => {
            evento.preventDefault();
            enlaces.forEach((enlace) => enlace.classList.remove('activo'));
            evento.target.classList.add('activo');

            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
        });
    });

    // Agregamos el listener para la barra de busqueda
    document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
        const busqueda = evento.target.value;
        grid.filter((item) => item.getElement().dataset.etiquetas.includes(busqueda));
    });

    // Agregamos listener para las imagenes
    const overlay = document.getElementById('overlay');
    document.querySelectorAll('.grid .item img').forEach((elemento) => {
        elemento.addEventListener('click', () => {
            const ruta = elemento.getAttribute('src');
            const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

            overlay.classList.add('activo');
            document.querySelector('#overlay img').src = ruta;
            document.querySelector('#overlay .descripcion').innerHTML = descripcion;
        });
    });

    // Eventlistener del boton de cerrar
    document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
        overlay.classList.remove('activo');
    });

    // Eventlistener del overlay
    overlay.addEventListener('click', (evento) => {
        evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
    });
}); // fin codigo HTML



const button = document.getElementById('btn').addEventListener('click', function() {

    const productosVelas = {
        nombre: "Vela Cadiz",
        fragancia: "Lavanda & Romero",
        cantidad: 10,
        valor: 200
    }

    //console.log(productosVelas);

    class Productos {
        constructor(nombre, fragancia, cantidad, valor, tamanio) {
            this.nombre = nombre;
            this.fragancia = fragancia;
            this.cantidad = cantidad;
            this.valor = valor;
            this.tamanio = tamanio;
        }

        cantidades() {
            console.log(`usted ingreso ${this.cantidad}`);
        }



    }

    class Vela extends Productos {
        constructor(nombre, fragancia, cantidad, valor, tamanio) {
            super(nombre, fragancia, cantidad, valor, tamanio);
        }

    }

    let ingresos;
    let totales;

    function pedirDatos() {

        ingresos = parseInt(prompt('Elegir producto a ingresar' + '\n' + '1: Velas' + '\n' + '2: Aromatizador' + '\n' + '3: Perfumes'));
        totales = parseInt(prompt('Ingrese cuantos productos van a ingresar'));
        if (ingresos == 1) {
            ingresos = 'Velas';
        } else if (ingresos == 2) {
            ingresos = 'Aromatizador';
        } else {
            ingresos = 'Perfumes';
        }

    }
    pedirDatos();

    let arrayProductos = [];
    let accion = [];

    function mostrandoDatos() {

        let guardando;
        let algo;
        let nombreVela;
        let fragancias;
        let canti;
        let precios;
        let tamaños;
        let salida;
        for (i = 1; i <= totales; i++) {

            nombreVela = prompt('Indique el nombre del producto');
            fragancias = prompt('Indique la fragancia');
            canti = parseInt(prompt('Ingrese las cantidades'));
            precios = parseInt(prompt('Ingrese el valor'));
            tamaños = parseInt(prompt('Ingrese la medida correspondiente' + '\n' + '1: Grande' + '\n' + '2: Mediano' + '\n' + '3: Chico'));
            if (tamaños == 1) {
                tamaños = 'Grande';
            } else if (tamaños == 2) {
                tamaños = 'Mediano';
            } else {
                tamaños = 'Chico';
            }
            guardando = new Vela(nombreVela, fragancias, canti, precios, tamaños);
            arrayProductos.push(guardando)
            accion.push(guardando.valor);

        }
    }
    mostrandoDatos();
    let salida = '\n';
    arrayProductos.forEach(el => {
        salida += 'Los productos ingresados fueron un ' + el.nombre + ' ' + el.tamanio + ' con fragancia ' + el.fragancia + ' la cantidad de ' + el.cantidad + ' a $' + el.valor + '\n';
        //salida = console.log(`Los productos ingresados fueron un ${el.nombre} ${el.tamanio} con fragancia ${el.fragancia} la cantidad de ${el.cantidad} a $${el.valor}`);
    });

    alert(salida);
    //console.log('los productos ingresados fueron', ingresos, ' y las cantidades de ', totales, '\n', arrayProductos);

    //DESAFIO 06
    const aromas = ['Cítrico Frutal', 'Cítrico Floral', 'Cítrico Dulce', 'Floral', 'Oriental dulce', 'Floral Dulce', 'Frutal Fresco', 'Amaderado', 'Floral Frutal'];
    //console.log(aromas);
    aromas.push('Frutas')
    console.log(aromas);

    console.log(aromas.join('\n'));

    //ARRAY DE OBJETOS

    const categorias = [{
            id: 1,
            titulo: "Velas",
            pais: "ARG",
        },
        {
            id: 2,
            titulo: "Difusores",
            pais: "ARG",
        },
        {
            id: 3,
            titulo: "Perfumes ambientes",
            pais: "ARG",
        },
        {
            id: 4,
            titulo: "Repuestos",
            pais: "ARG",
        }
    ];

    const velasAromaticas = [{
            id: 1,
            nombre: 'Vela Honolu',
            aroma: 'Mango & Anana',
            precio: 2200,
            año: 2020
        },
        {
            id: 2,
            nombre: 'Vela Petit Labrada',
            aroma: 'Lavanda & Romero',
            precio: 1250,
            año: 2021
        },
        {
            id: 3,
            nombre: 'Vela Soleil',
            aroma: 'Vainilla & Coco',
            precio: 2350,
            año: 2021
        },
        {
            id: 4,
            nombre: 'Vela Trianón',
            aroma: 'Coco & Lima',
            precio: 2300,
            año: 2021
        },
        {
            id: 5,
            nombre: 'Vela Windsor',
            aroma: 'Vainilla & Coco',
            precio: 2400,
            año: 2020
        }
    ];

    const baratos = velasAromaticas.filter(el => el.precio < 2300);

    let formato = JSON.stringify(baratos);
    console.log(formato);

    const ordenado = velasAromaticas.sort(el => el.nombre);
    let orden = JSON.stringify(ordenado);
    console.log(orden);

    let identificador = '';
    categorias.forEach(el => {
        identificador += el.id + ' ';

    })
    console.log('los id son: ', identificador);
    console.log(`El precio mas alto es $${Math.max(...accion)}\n Valor menor: $${Math.min(...accion)}`);

}); //fin