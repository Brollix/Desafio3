/* Tomando como base los ejemplos anteriores de la estructura for y while, 
crear un algoritmo que repita un bloque de instrucciones. 
En cada repetición es necesario efectuar una operación 
o comparación para obtener una salida por alerta o consola. */

alert('Te busco todos los años bisiestos hasta el año que me digas.');

let año = parseInt(prompt('Ingresa un Número entero:'));

while (isNaN(año)) {
	año = parseInt(prompt('Incorrecto. Ingresa un Numero Entero:'));
}

let bisiesto = [];

for (let i = 0; i <= año; i++) {
	if (i % 4 == 0) {
		bisiesto.push(i);
	}
}

cantidadBisiestos = bisiesto.length - 1;

document.getElementById('añoElegido').innerHTML = 'Año elegido: ' + año;
document.getElementById('añosBisiestos').innerHTML =
	'Años bisiestos hasta el año elegido: ' + bisiesto.length;
document.getElementById('ultimoAño').innerHTML =
	'Ultimo año bisiesto: ' + bisiesto[cantidadBisiestos];

console.log(bisiesto);

console.log(`Cantidad de años bisiestos hasta el año ${año}:`, bisiesto.length);

console.log('Ultimo año bisiesto: ' + bisiesto[cantidadBisiestos]);
