import modificador from './modificador.js';
import ingredientes from './ingredientes.js';

let ingredientesMaiusculo = modificador.capitalizar(ingredientes, 'nome');
let ingredientesOrdenados = modificador.ordenar(ingredientesMaiusculo, 'nome');

let containerIngredientes = document.getElementById('container-ingredientes');

ingredientesOrdenados.forEach(element => {
    let textoHTML = `
    <div class="ingrediente">
        <img src="img/${element.img}" alt="Foto do Agrião">
        <p class="nome-ingrediente">${element.nome}</p>
    </div>
    `;

    containerIngredientes.innerHTML += textoHTML;
});


