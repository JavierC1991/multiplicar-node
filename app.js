const argv = require('./config/yargs').argv
const { crearArchivo, listar } = require('./Multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.Limite)
            .then(mensaje => console.log(mensaje))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.Limite)
            .then(mensaje => console.log(mensaje))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no identificado');
}