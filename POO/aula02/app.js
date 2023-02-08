import modificador from './modificador.js';
import ingredientes from './ingredientes.js';

let ingredientesOrdenados = modificador.ordenar(ingredientes, 'nome');

let containerIngredientes = document.getElementById('container-ingredientes');



/*
<div class="ingrediente">
    <img src="img/agriao.png" alt="Foto do Agrião">
    <p class="nome-ingrediente"></p>
</div>
*/