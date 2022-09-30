//Celsius a Fahrenheit

//Crear un programa que pida ingresar una cantidad de grados Celsius y muestre un mensaje con el resultado de la conversión a grados Fahrenheit.

const celsius = Number(prompt("Por favor ingresa los grados Celsius"));
const conversion= (celsius * 1.8) + 32; 
alert(`La conversión de ${celsius} grados Celsius a grados Fahrenheit es: ${conversion}`);