var ingredientes = ['mel', 'água', 'sal', 'mostarda'];

var modificado = [];

for (var i=0; i < ingredientes.length; i++){

    var letraInicial = ingredientes[i].charAt(0).toUpperCase();

    var restoTexto = ingredientes[i].slice(1);

    var resultado = letraInicial + restoTexto;

    modificado[i] = resultado;

    console.log(modificado);
}

var ordenado = modificado.sort((a,b) => {
    return a.localeCompare(b);
});

console.log(ordenado);