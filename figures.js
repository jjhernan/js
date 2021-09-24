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
  "Los lados del tríangilo miden: " +
    ladoTriangulo1 +
    "cm " +
    ladoTriangulo2 +
    "cm " +
    baseTriangulo +
    "cm "
);

const alturaTriangulo = 5.5;

console.log("La altura del triangulo es: " + alturaTriangulo +"cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro  del triangulo es: " + perimetroTriangulo +"cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triangulo es: " + areaTriangulo +"cm");

console.groupEnd();

console.group("Círculos");
// Código de Círculo

// Radio
const radioCirculo = 4;
console.log("El radio del Círculo es: " + radioCirculo +"cm");

// Diámetro 
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del Círculo es: " + diametroCirculo +"cm");

// PI
//const PI =  3.1415;
const PI = Math.PI;
console.log("El valor de PI es: " + PI +"cm");

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El valor del perímetro de un Círculo es: " + perimetroCirculo +"cm");

// Área
const areaCirculo =  (radioCirculo * radioCirculo) * PI;
console.log("El área de un Círculo es: " + areaCirculo +"cm");

console.groupEnd();
