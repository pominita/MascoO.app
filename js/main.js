import perritos from "./data.js";
const input = document.querySelector('#search')
const filtrado = document.querySelector('#filtrado')
console.log(input, filtrado);
//import data from "./data.js";
//data.map((item) => {
// console.log(item.name);
//});

//let input = "Tibetan Terrier";
const resultados = data.filter((perritos) => {
  const regex = new RegExp(input, "gi");
  return perritos.name.match(regex);
});

console.log(resultados);
