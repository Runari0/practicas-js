// let a; //al no tener valor
// let b = 11; //al tener valor

// if (a === undefined){ 
//     console.log('La variable `a` no tiene un valor asignado.');
// } else {
//     console.log('La variable `a` si tiene un valor asignado.');
// }
// console.log()//
// if (b === undefined){
//     console.log('La variable `b` no tiene un valor asignado.');
// } else {
//     console.log('La variable `b` si tiene un valor asignado.');
// }
// console.log("-------------------------");
// console.log("quitando valor a variable");
// b = undefined;// no tener valor 
// if (b === undefined){
//     console.log('La variable `b` no tiene un valor asignado.');
// } else {
//     console.log('La variable `b` si tiene un valor asignado.');
// }

// function valor(n){
//     return (n === undefined) ? console.log(`La variable ${n} no tiene un valor asignado.`) : console.log(`La variable ${n} tiene un valor asignado de ${typeof n}`);
// }
// valor(10)

//?Forma dos simplificado

let n = 10;//modificar esta linea 
function valor(n){
    return (n === undefined) ? console.log(`La variable ${n} no tiene un valor asignado.`) : (n === n.isNaN) ? console.log(`La variable ${n} es de tipo NaN.`) : console.log(`La variable ${n} es de tipo ${typeof n}`);
}
valor(n);
