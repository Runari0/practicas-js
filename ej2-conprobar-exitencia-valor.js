//? comprobar la existencia del valor y que tipo es con Operador Condicional
//? Forma 1
function valor(n){
    return (n === undefined) ? console.log(`La variable ${n} no tiene un valor asignado.`) :
    (n === n.isNaN) ? console.log(`La variable ${n} es de tipo NaN.`) 
    : console.log(`La variable ${n} es de tipo ${typeof n}`);
}
valor(10);
console.log();

//? form 2 sin funcion o condicional
console.log("-------------------------");
let a; //al no tener valor
let b = 11; //al tener valor
if (a === undefined){ 
    console.log('La variable `a` no tiene un valor asignado.');
} else {
    console.log('La variable `a` si tiene un valor asignado.');
}
console.log();
if (b === undefined){
    console.log('La variable `b` no tiene un valor asignado.');
} else {
    console.log('La variable `b` si tiene un valor asignado.');
}
console.log("quitando valor a variable");
b = undefined;// no tener valor 
if (b === undefined){
    console.log('La variable `b` no tiene un valor asignado.');
} else {
    console.log('La variable `b` si tiene un valor asignado.');
}
