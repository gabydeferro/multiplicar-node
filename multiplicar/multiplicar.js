const fs = require('fs');
const colors = require(`colors`);


let listarTabla = (base, limite = 10) => {


    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base*i}\n`);
    }
}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base no es un numero`);
            return;
        }

        let data = `Tabla del ${base}\n`;

        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err);

            resolve(`El archivo ha sido creado con exito`.random);

        });
    });
}


module.exports = {
    crearArchivo,
    listarTabla
};