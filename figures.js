// Código del cuadrado 
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro cuadrado es: " + perimetroCuadrado + "cm^2");

const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log("El área cuadrada es: " + areaCuadrada + "cm");
console.groupEnd();
console.group("Tríangulos");

// Código del tríangulo 
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
    "Los lados del tríangilo miden: " 
    + ladoTriangulo1 
    + "cm " 
    + ladoTriangulo2
    + "cm " 
    + baseTriangulo 
    + "cm " );

    const alturaTriangulo = 5.5;

    console.log("La altura del triangulo es: " + alturaTriangulo);
    
    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    console.log("El perímetro  del triangulo es: " + perimetroTriangulo);
    
    const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    console.log("El área del triangulo es: " + areaTriangulo);
    
    console.groupEnd();
