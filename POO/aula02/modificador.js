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

export default {
    capitalizar: fnCapitalizar,
    ordenar: fnOrdenar
};