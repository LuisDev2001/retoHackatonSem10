/*RETO 1*/
//Ejercicio 1
function sumita(numero1, numero2) {
  let suma = numero1 + numero2;
  return console.log(`La suma es: ${suma}`);
}

sumita(10, 20);
sumita(100, 200);
sumita(100, 180);

//Ejercicio 2
console.log("--------------------------");
function potenciacion(potencia, numero) {
  let resultado = Math.pow(numero, potencia);
  return console.log(`La potencia es: ${resultado}`);
}
potenciacion(2, 2);

//Ejercicio 3
console.log("--------------------------");
function sumaCubitos(...rest) {
  let suma = 0;
  let resultadoCubo = 0;
  for (let i = 0; i < rest.length; i++) {
    resultadoCubo = Math.pow(rest[i], 3);
    console.log(Number(resultadoCubo));
    suma = suma + resultadoCubo;
  }

  return console.log(`La suma de los cubos es: ${suma}`);
}

sumaCubitos(1, 5, 9);

//Ejercicio 4
console.log("--------------------------");
function areaTriangulo(base, altura) {
  let area = (base * altura) / 2;
  return console.log(`El area del triangulo es: ${area}`);
}

areaTriangulo(3, 2);

//Ejercicio 5
console.log("--------------------------");
function calculator(number1, operation, number2) {
  let resultado = 0;
  switch (operation) {
    case "+":
      resultado = number1 + number2;
      console.log(`La suma es: ${resultado}`);
      break;
    case "-":
      resultado = number1 - number2;
      console.log(`La resta es: ${resultado}`);
      break;
    case "x":
      resultado = number1 * number2;
      console.log(`La multiplicacion es: ${resultado}`);
      break;
    case "/":
      resultado = number1 / number2;
      console.log(`La division es: ${resultado}`);
      break;
    case "%":
      resultado = number1 % number2;
      console.log(`El modulo es: ${resultado}`);
      break;
    default:
      console.log("El parametro no es reconocido");
      break;
  }
}
calculator(2, "+", 2);
calculator(2, "-", 2);
calculator(2, "x", 2);
calculator(2, "/", 2);
calculator(2, "%", 2);
calculator(2, "~", 2);

/*
PREGUNTAS:

¿Como se define una funcion?
  > Un funcion se crea con la palabra reservada function y se le coloca
    el nombre y tambien recibe parametros que se requieran usar. Tambien existes
    las funciones de flecha, estas se declaran como una variable y se le coloca
    lo siguiente "() =>" para hacer referencia a la funcion de flecha, esta tambien recibe
    parametros.

¿Hasta cuantos argumentos puedes declarar en una funcion?
  > Depende, depende de que en tu funcion definas por ejemplo dos parametros eso
    eso significa que le puedes pasar dos argumentos, si le pasas unos de mas saldra 
    error en la consola. Por otro lado si le colocas el parametro '...rest', en ese
    caso si puedes recibir un número indefinido de argumentos como un array.
*/
