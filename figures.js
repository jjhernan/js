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

function perimetroTriangulo(lado1, lado2, base){ 
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

// Formulas HTML and JS Triangulo 

function calcularPerimetroTriangulo(){
    const inputTL1 = document.getElementById("InputTrianguloL1");
    const valueTL1 = parseFloat(inputTL1.value);
    const inputTL2 = document.getElementById("InputTrianguloL2");
    const valueTL2 = parseFloat(inputTL2.value);
    const inputB = document.getElementById("InputTrianguloB");
    const valueB = parseFloat(inputB.value);


    const perimetro = perimetroTriangulo(valueTL1, valueTL2, valueB);
    console.log(perimetro);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputTLa = document.getElementById("InputTrianguloLa");
    const valueTLa = parseFloat(inputTLa.value);
    const inputBa = document.getElementById("InputTrianguloBa");
    const valueBa = parseFloat(inputBa.value);

    const perimetro = areaTriangulo(valueTLa, valueBa);
    console.log(perimetro);
    alert(perimetro);
}

// Formulas para Círculo


function calculardiametroCirculo(){
    const input = document.getElementById("InputCirculoDiametro");
    const value = parseFloat(input.value);

    const diametro = diametroCirculo(value);
    console.log(diametro);
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculoPerimetro");
    const value = parseFloat(input.value);

    const diametro = diametroCirculo(value);
    const diametroPI = diametro * PI;
    console.log(diametroPI);
    alert(diametroPI);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculoArea");
    const value = parseFloat(input.value);

    const area = areaCirculo(value);
    console.log(area);
    alert(area);
}
 
