const estado = 'MG';
const URL = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/distritos`;

async function testeApi(){
    const api = await fetch (URL);
    const data = await api.json();

    console.log(data);

}
