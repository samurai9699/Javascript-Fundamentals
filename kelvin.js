//var to represent today's forecast
var kelvin = 0;
kelvin -=273;

//conversion of celsius from kelvin 
var celsius = 20;
 
//conversion of celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

//getting the fahrenheit in whole number
fahrenheit = Math.floor(fahrenheit);

// temp to farenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert to Newton
let newton = celsius * (33 / 100);
 
// Round down
newton = Math.floor(newton);
 
console.log(`The temperature is ${newton} degrees Newton.`);