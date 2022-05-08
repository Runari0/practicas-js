function conteo(numero,aumentador){
    const ourArray = [];
    for (let i = 0; i < numero; i += aumentador) {
    ourArray.push(i);
    }
    console.log(ourArray);
}
conteo(20,2);//(A,B) cuanta hasta 'A' en multiplos de 'B' 
//reversa
function conteoR(numero,aumentador){
    const ourArray = [];
    for (let i = numero; i > 0; i -= aumentador) {
        ourArray.push(i);
    }
    console.log(ourArray);
}
    conteoR(20,1);//(A,B) cuanta hasta 'A' en multiplos de 'B' en rversa
