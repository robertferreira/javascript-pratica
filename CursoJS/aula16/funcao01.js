function parImpar (n){
    if (n%2==0){
        return 'par';
    }
    else{
        return 'impar';
    }
}

var teste = parImpar(4);

console.log(teste);