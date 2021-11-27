const grid = new Muuri('.grid', {
    layout:{
        rounding: false
    }
});

window.addEventListener('load', () => {
	grid.refreshItems().layout();
	// document.getElementById('productos').classList.add('imagenes-cargadas');

	// Agregamos los listener de los enlaces para filtrar por categoria.
	const enlaces = document.querySelectorAll('.filter a');
    const displayUI = document.getElementById('productos');
	enlaces.forEach((elemento) => {
        
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
			evento.target.classList.add('activo');

            // let category = evento.target.textContent.toLowerCase();
            // console.log(category);
            // displayUI.innerHTML=''
            
            // if (category == 'todos'){
            //     displayUI.innerHTML= 'si se puede'
            // }

			const categoria = evento.target.innerHTML.toLowerCase();
			categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
		});
	});

	// Agregamos el listener para la barra de busqueda
	document.querySelector('#search-box').addEventListener('input', (evento) => {
		const busqueda = evento.target.value.toLowerCase();
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
	});
});



//console.log(totalPrecios.sort())
