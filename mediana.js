function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoValor) {
    return valorAcumulado + nuevoValor;
  });

  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

//const lista1 = [100, 200, 500, 400000000];
let mediana;

function calcularMediana(lista1) {
  const listaO = lista1.sort(function (a, b) {
    return a - b;
  });

  console.log(listaO);

  const mitadLista1 = parseInt(listaO.length / 2);

  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  

  if (esPar(listaO.length)) {
    const elemento1 = listaO[mitadLista1];
    const elemento2 = listaO[mitadLista1 - 1];

    const promedioElemnto1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemnto1y2;
  } else {
    mediana = listaO[mitadLista1];
  }
}
//console.log({lista1,mitadLista1});
