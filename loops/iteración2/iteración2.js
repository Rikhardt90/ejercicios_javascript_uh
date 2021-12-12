//NO FUNCIONA

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

for (let i = 0; i < alumns.length; i++) {

  for (let j = 0; j < alumns[i].length; j++) {

    let numeroAprobados = 0;

    if (alumns[i].T1 == true) {
      numeroAprobados = numeroAprobados + 1;
    }

    if (alumns[i].T2 == true) {
      numeroAprobados = numeroAprobados + 1;
    }

    if (alumns[i].T3 == true) {
      numeroAprobados = numeroAprobados + 1;
    }

    if (numeroAprobados <= 2) {
      console.log(alumns[i] + "ha aprobado al menos dos trimestres");
    }
  }
}
