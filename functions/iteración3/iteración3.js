const numbers = [1, 2, 3, 5, 45, 37, 58];


function sumAll(param) {

    let sumaTotal = 0;


  for (let i = 0; i < param.length; i++) {
      sumaTotal = sumaTotal + param[i];
      
       }
       console.log(sumaTotal);
}

sumAll (numbers);