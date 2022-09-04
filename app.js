const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
console.clear();


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
    .catch(err => console.log(err));



// const [, , arguemnto3] = process.argv;
// const [, base = 1] = arguemnto3.split('=');

//console.log(base);
//console.log(process.argv);
//console.log(argv.base);
//const base = 305554;