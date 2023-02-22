const estado = 'MG';
const URL = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/distritos`;
const divElement = document.getElementById('resultado');
const inputElement = document.getElementById('input');


async function testeApi(){
    const api = await fetch (URL);
    const data = await api.json();
    var cidadeId = 0;
    var cidade = inputElement.value.toUpperCase();
    
    for (i=0; i < data.length; i++){

    if (data[cidadeId].municipio.nome.toUpperCase().indexOf(cidade) == -1){
        divElement.innerText = 'Cidade não encontrada';
        cidadeId++;
    }

    else {
        divElement.innerText = cidade;
    }
    }
    


}
