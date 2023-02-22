var pais = 'br';
const URL = `https://servicodados.ibge.gov.br/api/v1/paises/${pais}`;
const divElement = document.getElementById('resultado');
const inputElement = document.getElementById('input');

async function Api() { 

event.preventDefault();

const conexaoApi = await fetch(URL)
const dados = await conexaoApi.json();

divElement.innerText = dados[0].nome.abreviado;

console.log(dados[0].nome.abreviado);
}

