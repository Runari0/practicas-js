const arr = [10, 9, 8, 7, 6];
function Recorrer(arr){
i = 0;
while( i < arr.length) {
console.log(arr[i]); 
    i++
}
}

Recorrer(arr);

console.log()
console.log("reversa")
function RecorrerR(arr){
    i = arr.length;
    while( i >= 0) {
    console.log(arr[i]); 
        i--
    }
    }
    
    RecorrerR(arr);