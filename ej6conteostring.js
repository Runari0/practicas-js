function conteo(numero,aumentador){
const ourArray = [];
for (let i = 0; i < numero; i += aumentador) {
    ourArray.push(i);
}
console.log(ourArray)
}
conteo(20,4);

//reversa

function conteoR(numero,aumentador){
    const ourArray = [];
    for (let i = numero; i > 0; i -= aumentador) {
        ourArray.push(i);
    }
    console.log(ourArray)
    }
    conteoR(20,4);
