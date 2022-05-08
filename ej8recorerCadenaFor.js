const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("reversa");

for (i = arr.length; i >= 0; i--) {
    console.log(arr[i]);
}
console.log("anidada")//
const arrDos = [ [1, 2], [3, 4], [5, 6, 7]];
for (let i = 0; i < arrDos.length; i++) {
    for (let j = 0; j < arrDos[i].length; j++) {
        console.log(arrDos[i][j]);
    }
}

//? error linea 7