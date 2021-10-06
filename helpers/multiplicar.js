const fs = require("fs");
const colors = require("colors");

const crerArchivo = async (base = 5, listar = false, hasta = 10) => {
  let salida = "";

  try {
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} ${"x".red} ${i} ${"=".green} ${base * i}\n`;
      consola += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("Tabla del col".rainbow, colors.blue(base));
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crerArchivo,
};
