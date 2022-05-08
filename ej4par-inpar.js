//? funcion para detectar par Y impar
//? form 1 operador condicional
function parImpar(n){
    return (typeof n ==='number') ? [(n === 0 ) ? console.log("Par") : (n === 1) ? console.log("Impar") : parImpar(n -2)] 
    : console.error(`el valor entrante ${n} no es numerico`);
}
parImpar(10);

//? forma 2
function parImpar2(n){
    if (typeof n ==='number'){
        if (n === 0 ) {
        console.log("Par");
        }else if(n === 1){
        console.log("Impar");
        }else {
        return parImpar2(n -2);
        }
    }else
    { 
        return console.error(`el valor entrante ${n} no es numerico`);
    }
}
parImpar2(11);
