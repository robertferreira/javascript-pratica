import capitalizar from './modificador';
import ordenar from './modificador';

var ingredientes = ['mel', 'água', 'sal', 'mostarda'];

var resultadoCapitalizado = (capitalizar(ingredientes));
var resultadoOrdenacao = (ordenar(resultadoCapitalizado));

console.log(resultadoCapitalizado);
console.log(resultadoOrdenacao);