function fnCapitalizarNovo(colecao, atributo) {
    if (typeof colecao[0] == 'object') {

        var resultado = colecao.map((obj) => {

            var letraInicial = obj[atributo].charAt(0).toUpperCase();
            var restoTexto = obj[atributo].slice(1);

            obj[atributo] = letraInicial + restoTexto;
            return obj;
        });

        console.log(resultado);
    }
    else if (typeof colecao[0] == 'string') {

        var resultado = colecao.map((valor) => {

            var letraInicial = valor.charAt(0).toUpperCase();
            var restoTexto = valor.slice(1);

            valor = letraInicial + restoTexto;
            return valor;
        });

        console.log(resultado);
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

function fnCaixaAlta(vetor) {
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