function fnCapitalizarNovo(colecao, atributo){
    console.log(typeof colecao[0]);
    
    if (typeof colecao[0] == 'object'){

    }
}

function fnCapitalizar(vetor) {

    var modificado = [];

    for (var i = 0; i < vetor.length; i++) {

        var letraInicial = vetor[i].charAt(0).toUpperCase();

        var restoTexto = vetor[i].slice(1);

        var resultado = letraInicial + restoTexto;

        modificado[i] = resultado;
    }

    return modificado;
}

function fnOrdenar(vetor) {

    return vetor.sort((a, b) => {
        return a.localeCompare(b);
    });
}

function fnCaixaAlta(vetor){
    var modificado = [];

    for (var i = 0; i < vetor.length; i++) {
        modificado[i] = vetor[i].toUpperCase();
    }

    return modificado;
}

export default {
    capitalizar: fnCapitalizar,
    capitalizarNovo: fnCapitalizarNovo,
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta
};