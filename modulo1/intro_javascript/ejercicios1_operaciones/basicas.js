//(ENTRADA) el usuario digita 2 valores


var valor1= prompt (" digita el primer valor");
var valor2= prompt ("digita el segundo valor"); 

//Nota: el prompt devuelve lod valores como texto
// en javascript cuando sumamos el texto, lo une ( concatena)
// cuando vayamos a trabajar con numeros, es decir, convertir texto a numero
//entonces debemos usar la funcion parseInt()



console.log("15" + "15");
console.log(parseInt("15") + parseInt("15"));
console.log(15+15);

//(PROCESO) hacer las operaciones con valores
var suma= parseInt(valor1) + parseInt(valor2);
var resta= parseInt(valor1) - parseInt(valor2);
var multiplicacion= parseInt(valor1) * parseInt(valor2);
var division= parseInt(valor1) / parseInt(valor2);

// (SALIDA) imprimir los valores
console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);