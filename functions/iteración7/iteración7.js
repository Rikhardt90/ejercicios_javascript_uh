const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
function finderName(param) {

  nombreBuscado = "Natasha";

  for (let i = 0; i < param.length; i++) {

    if (param[i] == nombreBuscado) {
      console.log(nombreBuscado + " era el nombre que buscaba!");

    } else {

      console.log("no es el nombre que buscaba");
    }
  }
}

finderName(nameFinder);