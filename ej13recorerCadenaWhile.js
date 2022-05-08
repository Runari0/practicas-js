//? recorer cadena con while
function Recorrer(arr){
i = 0;
    while( i < arr.length) {
    console.log(arr[i]); 
    i++;
    }
}
Recorrer([10, 9, 8, 7, 6]);

console.log();
//?reversa
console.log("reversa");
function reversa(arr){
i = arr.length;
    while( i >= 0) {
    console.log(arr[i]); 
    i--;
    }
}
reversa([10, 9, 8, 7, 6]);
