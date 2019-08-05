alert("bienvenido a mi pagina");

//operaciones matematicas
//declarar variables sin valor, colocamos var y el nombre de la variable
var suma;
var resta;
var multiplicacion;
var division;

//imprimir variables sin valor
//cuando una variable no tiene valor , javascript nos muestra undefined
console.log(suma);

//asignarle un valor a las varaibles usando los operadores matematicos 
// Nota: cuando ya declaramis variables , no es necesario volver a declarar para asignarle un valor

//var suma=1+1 ; esto no lo hacemos porque ya esta declarada

// que es declarar una variable?
console.log(potencia);

//esto no dara el siguiente error:
//Uncaught ReferenceError: potencia is not defined
//para solucionarlo, declaramos la variable

var potencia;

/*operaciones sin variables */
console.log(" ---operaciones sin variables---");
console.log(1 + 1); //suma
console.log(10 - 3); //resta
console.log(5 * 5); //multiplicacion
console.log(10 / 2); //division

console.log(" ---operaciones con variables---");
suma= 1 + 1;
resta= 10 -3;
multiplicacion= 5 * 5;
division= 10 / 2;

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);

/*ingresado por el usuario */
prompt("digita tu nombre");
prompt("digita tu edad");
prompt("digita tu ciudad");

//ingrsado y almacenado
var nombre;
var ciudad;
var edad;

alert("ahora vamos a pedirte tus datos.");

nombre= prompt("digite tu nombre");
ciudad= prompt("digite tu ciudad");
edad= prompt("digite tu edad");

console.log(nombre);
console.log(ciudad);
console.log(edad);

alert(nombre);
alert(ciudad);
alert(edad);

document.write(nombre);
document.write(ciudad);
document.write(edad);

