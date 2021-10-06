const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "es la base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "te ayuda a listar la tabla de multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: true,
    describe: "hasta donde multiplicar",
  })
  .check((argv, option) => {
    if (isNaN(argv.b)) {
      throw "la base tiene que se un numero";
    }
    return true;
  }).argv;

module.exports = argv;
