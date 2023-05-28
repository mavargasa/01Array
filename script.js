// Crear un array vacío
var numerosAleatorios = [];

// Generar 10 números aleatorios y guardarlos en el array
for (var i = 0; i < 10; i++) {
  var numero = Math.floor(Math.random() * 100) + 1;
  numerosAleatorios.push(numero);
}

// Mostrar el resultado en la consola
console.log("Números aleatorios:", numerosAleatorios);
