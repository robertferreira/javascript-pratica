let numeros = [10, 9, 8 , 7, 6, 5 , 4, 3, 2, 1];

numeros.forEach(passarArray);

function passarArray (valor, indice){
    console.log(`O valor é ${valor} e o indice é ${indice}`);
}