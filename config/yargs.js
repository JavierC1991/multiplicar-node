const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    Limite: {
        demand: true,
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Me imprime la tabla de multiplicar especificada', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}