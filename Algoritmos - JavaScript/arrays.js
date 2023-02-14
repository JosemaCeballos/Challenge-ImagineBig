//? JavaScript ES6: Dados los siguientes array's, imprimir por consola los elementos del array “y” que no se encuentran en el array “x” utilizando para tal fin una única línea de código.

const x = ["n", "bro", "c", "|"];
const y = ["d", "n", "l", "bro", "g"];

y.filter((p) => { if (!x.includes(p)) console.log(p) });

// Otra solución que pense fue la siguiente:
console.log(y.filter((p) => !x.includes(p)));

// Solo que siento que no cumple con lo que me piden por el tema de que me devuelve un array que contiene los elementos, y no los elementos solamente cómo me pide la consiga
