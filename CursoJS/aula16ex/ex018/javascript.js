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
        repetido = false;

        if (array.length == 0) {
            select.innerHTML = "";
        }

        for (i = 0; i < array.length; i++){
            if (numero_valor == array[i]){
                window.alert('Não utilize números que já utilizou anteriormente!');

                repetido = true;
            }
        }

        if (repetido == false){
        option.text = `Valor ${numero_valor} foi adicionado.`;
        select.append(option);

        array.push(numero_valor);

        console.log(array);

        numero.value = "";
        numero.focus();
        }
    }
}

function finalizar(){
    let final = document.getElementById('final');
    let p_valores_cadastrados = document.createElement('p');
    let p_maior_valor = document.createElement('p');
    let p_menor_valor = document.createElement('p');
    let p_soma_valores = document.createElement('p');
    let p_media_valores = document.createElement('p');
    let soma = 0;

    final.innerHTML = " ";

    p_valores_cadastrados.textContent = `Ao todo, temos ${array.length} números cadastrados.`;
    final.append(p_valores_cadastrados);

    p_maior_valor.textContent = `O maior valor informado foi ${Math.max(...array)}.`;
    final.append(p_maior_valor);

    p_menor_valor.textContent = `O menor valor informado foi ${Math.min(...array)}.`;
    final.append(p_menor_valor);

    for (i = 0; i < array.length; i++){
        soma += array[i];
    }
    p_soma_valores.textContent = `Somando todos os valores, temos ${soma}.`;
    final.append(p_soma_valores);

    media = soma / array.length;
    p_media_valores.textContent = `A média dos valores digitados é ${media}.`;
    final.append(p_media_valores);
}