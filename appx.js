
const { crearAchivo } = require('./helpers/multiplicar');
const { crearAchivon } = require('./helpers/nmultiplicar');
const { crearAchivoa } = require('./helpers/amultiplicar');

console.clear();

//Forma normal
   let base = 3;
crearAchivo( base );
console.log('===============3=================\n');

// con Promise
base = 4;
crearAchivon( base )
.then(nombrearchivo => console.log(nombrearchivo, 'creado'))
.catch(err => console.log( err));
console.log('===============4=================\n');

// con Async
base  = 5;
crearAchivoa( base )
.then(nombrearchivo => console.log(nombrearchivo, 'Creado'))
.catch(err => console.log( err));
console.log('===============5=================\n');

