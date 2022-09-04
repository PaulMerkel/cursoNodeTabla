const fs = require('fs');
const colors = require('colors');

let salida = '';
const crearArchivo = (base, listar = false, hasta = 10) => {

    return new Promise((resolve, reject) => {
        for (i = 1; i <= hasta; i++) {
            salida += `${base} ${'X'.green} ${i} ${'='.black} ${i*base} \n`;
        }

        fs.writeFileSync(`./salida/tabla${base}.txt`, salida);
        resolve(`tabla${base}.txt`);
        if (listar) {
            console.log(salida);
        }
        //resolve(`Papi chulo rico suave`);
    });


}

module.exports = {
    crearArchivo
}