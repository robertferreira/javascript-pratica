let numero = document.getElementById('numero');
let select = document.getElementById('select');
var array = [];

function adicionar() {
    let numero_valor = Number(numero.value);
    let option = document.createElement('option');

    if (numero.value.length === 0) {
        window.alert('Preencha o campo com algum número!');
    }
    else if (numero_valor < 1 || numero_valor > 100) {
        window.alert('Preencha o campo com um número entre 1 e 100!');
    }
    else {

        // NÃO ACEITAR VALORES DUPLICADOS
        
        if (array.length == 0) {
            select.innerHTML = "";
        }

        option.text = `Valor ${numero_valor} foi adicionado.`;
        select.append(option);

        array.push(numero_valor);

        console.log(array);

        numero.value = "";
        numero.focus();
    }
}