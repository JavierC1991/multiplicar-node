const fs = require('fs')



listar = (base, Limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor Ingresado ${base} no es un numero valido`);
            return;
        }
        let data = '';
        for (let i = 1; i <= Limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        };
        console.log(data);
    });
};


crearArchivo = (base, Limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor Ingresado ${base} no es un numero valido`);
            return;
        }
        let data = '';
        for (let i = 1; i <= Limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.appendFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) throw err;
            console.log(`la tabla del ${base} a sido grabada en tabla-${base}.txt`);
        });
    });
};

module.exports = {
    crearArchivo,
    listar
}