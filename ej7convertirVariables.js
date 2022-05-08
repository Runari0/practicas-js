//? convertir variables entre numerica y cadenas
let valor = 10; //solo cambiar este valor. cambia de numerica a cadena.
console.log("Valor Original: ", valor, typeof valor);
console.log();
console.log("Cambio a cadena carracteres");
function cadena (m){ return console.log(String(m), typeof String(m)) };
cadena(valor);
console.log();
// parte 2
let valorN = "20"; //solo cambiar este valor. cambia de cadena a numerica.
console.log("Valor Original: ", valorN, typeof valorN);
console.log("Cambio a Numerico");
function cadenaN (n){ return console.log(Number(n), typeof Number(n)) };
cadenaN(valorN);
