array = [5,10,12,34,45,100,9,12,1,5,4];

for (n = 0; n < array.length; n++){
    for (i = 0; i < array.length; i++){
        if (array[i] > array[i+1]){
            [array[i], array[i+1]] = [array[i+1], array[i]];
            console.log(array);
        }
    }
}