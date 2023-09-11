const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

const frutasInvertidasString = frutas.reverse().join(', ');
console.log(frutasInvertidasString);


frutas.shift();
frutas.pop();
frutas.push('Melão');

console.log(frutas);
