const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla'
    })
    .option('l', {
        alias: 'limite',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Es la opcion de listar la tabla'

    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: false,
        describe: 'Limite superior'

    })
    .check((argv, options) => {

        if (isNaN(argv.b)) {
            throw 'La base debe de ser numerico';
        }

        if (isNaN(argv.h)) {
            throw 'El limite debe de ser numerico';
        }

        return true;
    })
    .argv;

module.exports = argv;