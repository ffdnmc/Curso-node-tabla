const argv = require('yargs')
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base para la tabla de multiplicar'
    })
    .option("l", {
        alias: "listar",
        type: "boolean",
        default: false,
        describe: 'Muestra la tabla en consola'
    }) 
    .option("h", {
        alias: "hasta",
        type: "number",
        default: true,
        describe: 'hasta cuanto muestra la tabla'
    })              
    .check( (argv, options) => {
        if( isNaN( argv.b) ){
            throw 'La Base tiene que ser un número'
        } 
        return true;
    })
    .check( (argv, options) => {
        if( isNaN( argv.h) ){
            throw 'El límite tiene que ser un número'
        } 
        return true;
    })
    .argv;

module.exports =  argv;
