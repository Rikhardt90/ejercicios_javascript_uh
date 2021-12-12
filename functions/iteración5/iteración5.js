//NO FUNCIONA

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(param) {
  let sumaTotal = 0;

  for (let i = 0; i < param.length; i++) {

    if (param[i] == Number) {
      sumaTotal = sumaTotal + param[i];

    } else if (param[i] == String) {
      sumaTotal = sumaTotal + param[i].length;
    }
  }
  console.log(sumaTotal);
} 

averageWord(mixedElements);
