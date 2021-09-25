// Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado){
    return lado * 4;
}
//console.log("El perímetro cuadrado es: " + perimetroCuadrado + "cm^2");

function areaCuadrado (lado){
     return lado * lado;
}     

//console.log("El área cuadrada es: " + areaCuadrada + "cm");
console.groupEnd();

console.group("Tríangulos");
// Código del tríangulo

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

/*console.log(
  "Los lados del tríangilo miden: " +
    ladoTriangulo1 +
    "cm " +
    ladoTriangulo2 +
    "cm " +
    baseTriangulo +
    "cm "
);*/

//const alturaTriangulo = 5.5;

//console.log("La altura del triangulo es: " + alturaTriangulo +"cm");

function perimetroTriangulo(lado1, lado2,base){ 
    return lado1 +  lado2 + base;
}
//console.log("El perímetro  del triangulo es: " + perimetroTriangulo +"cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;

} 
//console.log("El área del triangulo es: " + areaTriangulo +"cm");

console.groupEnd();

console.group("Círculos");
// Código de Círculo

// Radio
//const radioCirculo = 4;
//console.log("El radio del Círculo es: " + radioCirculo +"cm");

// Diámetro 
function diametroCirculo(radio) {
   return radio * 2;
} 
//console.log("El diametro del Círculo es: " + diametroCirculo +"cm");

// PI
//const PI =  3.1415;
const PI = Math.PI;
//console.log("El valor de PI es: " + PI +"cm");

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;

} 
//console.log("El valor del perímetro de un Círculo es: " + perimetroCirculo +"cm");

// Área
function areaCirculo(radioCirculo){
    return (radioCirculo * radioCirculo) * Math.PI;
}   
//console.log("El área de un Círculo es: " + areaCirculo +"cm");

console.groupEnd();

// Integrar HTML and JS

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    console.log(perimetro);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = areaCuadrado(value);
    console.log(perimetro);
    alert(perimetro);

}
