alert("bienvenido a tu banco")

//el usuario va a decir su nombre
var nombre = prompt("digite tu nombre");
var monto =  parseInt ( prompt("digite monto de prestamo"));
var cuotas = parseInt( prompt("digite las cuentas que tu vas a pagar"));
var tasa = parseInt( prompt("digite la tasa del prestamo"));

//proceso
 var pago = monto / cuotas;
 var interes = (monto * tasa) / 100; 
 var total = monto + interes;

 //salida
 
 alert(pago);
 alert(interes);
alert(total);