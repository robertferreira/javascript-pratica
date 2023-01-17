function contar() {

    var inicio = window.document.getElementById("inicio").value;
    var fim = window.document.getElementById("fim").value;
    var passo = window.document.getElementById("passo").value;
    var contagem = window.document.getElementById("contagem");

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        window.alert('ERRO: Preencha todos os campos!');
    }
    else {
        if (Number(passo) == 0){
            window.alert('ERRO: Passo não pode ser 0! Considerando Passo = 1.');
            passo = 1;
        }

        contagem.innerHTML = 'Contando: <br/><br/>';

        if (Number(inicio) <= Number(fim)) {
            while (Number(inicio) <= Number(fim)) {
                contagem.innerHTML += `\u{1F449} ${inicio} <br/>`;
                inicio = Number(inicio) + Number(passo);
            }

            contagem.innerHTML += `<br/> \u{1F3C1} FIM`;
        }
        else{
            while (Number(inicio) >= Number(fim)) {
                contagem.innerHTML += `\u{1F449} ${inicio} <br/>`;
                inicio = Number(inicio) - Number(passo);
            }

            contagem.innerHTML += `<br/> \u{1F3C1} FIM`;
        }
    }
}