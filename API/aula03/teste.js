const URL = `https://servicodados.ibge.gov.br/api/v1/paises/`;
const divElement = document.getElementById('resultado');
const inputElement = document.getElementById('input');


async function Api() { 

var paisId = 0;

event.preventDefault();

var pais = inputElement.value;

const conexaoApi = await fetch(URL);
const dados = await conexaoApi.json();

for (i=0; dados[i].nome.abreviado.indexOf(pais) == -1; i++){
paisId ++;
}

divElement.innerText = dados[paisId].nome.abreviado;

}



