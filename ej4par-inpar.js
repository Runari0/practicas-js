function parImpar(n){
if (typeof n ==='number'){
    if (n === 0 ) {
        console.log("Par");
    }else if(n === 1){
        console.log("Impar")
    }else {
    return parImpar(n -2);
    }
}else{ return console.error(`el valor entrante ${n} no es numerico`)}
}
parImpar(10)

// function parImpar(n){
//     return (typeof n ==='number') ? [(n === 0 ) ? console.log("Par") : (n === 1) ? console.log("Impar") : parImpar(n -2)] 
//     : console.error(`el valor entrante ${n} no es numerico`);
// }
// parImpar(10);