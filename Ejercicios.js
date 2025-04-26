// EJERCICIOS: Mobile JS

/*Ejercicio 1
Filtrar Números Pares
Crear una función que reciba un array con números del 0 al 10, y devuelva un
nuevo array que contenga solo los números pares*/

function filtrarPares (numeros) {
    return numeros.filter (num => num % 2 === 0);
  }

// uso
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let pares = filtrarPares(numeros);

/*Ejercicio 2
Calcular Promedio
Escribir una función que tome un array de números y calcule el promedio.*/

function calcularPromedio(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma = suma + numeros[i]; 
    }

    const cantidadNumeros = numeros.length;
    const promedio = suma / cantidadNumeros;
  
    return promedio;
  }


  const notas = [6, 7, 4, 9, 8];
  const promedioNotas = calcularPromedio(notas);


/*Ejercicio 3
Imprimir con Retraso
Usar una función flecha y setTimeout para imprimir cada elemento de un array
con un retraso de 1 segundo por elemento.*/

const imprimirElemento = (elemento) => {
  console.log(`${elemento}`);
};

const imprimirConRetraso = (array) => {
  array.forEach((elemento, indice) => {
    setTimeout(imprimirElemento, (indice + 1) * 1000, elemento);
  });
};


const array3 = ["the", "end", "is", "near"];


/*Ejercicio 4
Operación con Callback
Crear una función que reciba un callback y dos números, aplique el callback y
devuelva el resultado. Implementar al menos dos callbacks diferentes.*/

function operarConCallback(callback, num1, num2) {
    return callback(num1, num2);
  }
  
  // Callback 1: sumar dos num
  const sumar = (a, b) => {
    return a + b;
  };
  
  // Callback 2: multiplicar dos num
  const multiplicar = (a, b) => {
    return a * b;
  };
  
  const resultadoSuma = operarConCallback(sumar, 4, 9);
  const resultadoMultiplicacion = operarConCallback(multiplicar, 4, 9);


/*Ejercicio 5
Contador con Botones
Crear un botón para incrementar y otro para decrementar un contador mostrado
en un elemento div. Actualizar el texto del div al hacer click.*/
let contador = 0;
const elementoContador = document.getElementById('contador');

function iniciarContador() {
    contador = parseInt(document.getElementById('valorInicial').value) || 0;
    elementoContador.textContent = contador;
}

document.getElementById('btnIncrementar').addEventListener('click', () => {
    contador++;
    elementoContador.textContent = contador;
});

document.getElementById('btnDecrementar').addEventListener('click', () => {
    contador--;
    elementoContador.textContent = contador;
});

/*Ejercicio 6
Cambiar Texto de Párrafos
Seleccionar todos los elementos p de la página y cambiar su texto al hacer
click en un botón.*/


/*Ejercicio 7
Agregar Elementos a una Lista
Crear una lista desordenada vacía y un botón. Al hacer click en el
botón, agregar un nuevo elemento a la lista con un número que se
incremente automáticamente.*/

/*Ejercicio 8
Eliminar Elementos de una Lista
Modificar el ejercicio anterior para que cada elemento generado tenga un botón
de "Eliminar" que borre solo ese elemento de la lista.*/
