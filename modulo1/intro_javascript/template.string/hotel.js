var nombreHotel = "cool";
var ratingHotel = 4.8;
var habitacionesHotel = 108;
var reservacionesHotel = 10;
var tieneGymHotel = true;

console.log(nombreHotel);
console.log(ratingHotel);
console.log(habitacionesHotel);
console.log(reservacionesHotel);
console.log(tieneGymHotel);


var hotel = {

    nombre:"loco",
    rating: 4.8,
    reservaciones: 105,
    habitaciones: 200,
    tieneGym: true,

}

console.log(hotel.nombre);
console.log(hotel.rating);
console.log(hotel.reservaciones);
console.log(hotel.habitaciones);
console.log(hotel.tieneGym);


//concatenar vs template stings

console.log("bienvenido al hotel " + hotel.nombre + " que tiene " + hotel.habitaciones  + " habitaciones");

//string

console.log(`el hotel tiene ${hotel.reservaciones} resevaciones`);
document.write(`<h1> bienvenido a ${hotel.nombre} </h1>`)
document.write(`<p>el hotel tiene ${hotel.habitaciones} habitaciones y actualmente ${hotel.reservaciones} reservaciones. </p>`)







