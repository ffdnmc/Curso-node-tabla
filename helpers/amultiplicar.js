const fs = require('fs');
const colors = require('colors');


const crearAchivoa = async( base, listar = false, hasta = 10) => {

    try {
        let salida = ''; 
        let consola = '';

          for (let i = 1; i <= hasta; i++) {
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
            
        }    
        if(listar) {
            console.log('=============='.green);
            console.log(' Tabla del:'.green, colors.red(base) );
            console.log('=============='.green);
            console.log(consola);
        } 
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt`;
                   
    } catch (err) {
        throw err;
    }


}

module.exports = {
    crearAchivoa
}
