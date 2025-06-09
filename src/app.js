// import "bootstrap";
// import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

let pronombres = [
  "el",
  "la",
  "mi",
  "tu",
  "nuestro",
  "su",
  "un",
  "una",
  "algun",
  "cierto",
];

let adjetivos = [
  "gran",
  "pequeño",
  "peludo",
  "misterioso",
  "apestos@",
  "rápido",
  "lento",
  "invisible",
  "brillante",
  "malvado",
  "torpe",
  "hambriento",
  "cansado",
  "pegajoso",
  "parlante",
];

let sustantivos = [
  "jabalí",
  "zombie",
  "sandía",
  "pingüino",
  "calcetín",
  "bruja",
  "robot",
  "cactus",
  "abuelita",
  "patito",
  "panqueque",
  "gnomo",
  "tostadora",
  "pez globo",
  "hámster",
  "ramio",
  "azucom",
  "tostada",
];

let extensiones = [
  "com",
  "es",
  "net",
  "org",
  "info",
  "io",
  "dev",
  "app",
];

// function genHack() {
//   let dom = [];

//   for (const p of pron) {
//     for (const a of adj) {
//       for (const s of sus) {
//         for (const e of ext) {
//           if (s.endsWith(e)) {
//             const sHack = s.slice(0, -e.length);
//             dom.push(`${p}${a}${sHack}.${e}`);
//           } else {
//             dom.push(`${p}${a}${s}.${e}`);
//           }
//         }
//       }
//     }
//   }
//   return dom;
// };


//Utilizando Buenas practicas
function generadorDeDominios() {
  let dominios = [];

  pronombres.forEach(pron => {
    adjetivos.forEach(adj => {
      sustantivos.forEach(sus => {
        extensiones.forEach(ext => {
          if (sus.endsWith(ext)) {
            const susHack = sus.slice(0, -ext.length);
            dominios.push(`${pron}${adj}${susHack}.${ext}`);
          } else {
            dominios.push(`${pron}${adj}${sus}.${ext}`);
          }
        });
      });
    });
  });

  return dominios;
}

const dominiosGenerados = generadorDeDominios();
console.log(dominiosGenerados);

