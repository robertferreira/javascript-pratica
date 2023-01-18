var valores = [8, 1, 7, 4, 2, 9];

for (var i = 0; i < valores.length; i++){
console.log(`A posição ${i} tem o valor ${valores[i]}`);
}

console.log('');

for (let i in valores){
console.log(`A posição ${i} tem o valor ${valores[i]}`);
}