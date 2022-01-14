
const { crearAchivoa } = require('./helpers/amultiplicar');
const argv = require('./config/yargs');
require('colors');


console.clear();

// asi no debe hacerse
// console.log(process.argv);
// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base = 5 ] = arg3.split('=');
// console.log(base);

console.log('ARGUMENTOS');
console.log(argv);

crearAchivoa( argv.b, argv.l, argv.h )
.then(nombrearchivo => console.log(nombrearchivo.rainbow, 'creado'))
.catch(err => console.log( err));