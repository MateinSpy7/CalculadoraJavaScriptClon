import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const multiplicarForm = document.querySelector("#multiplicar-form");
const multiplicarDiv = document.querySelector("#multiplicar-resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault(); //pra no recargar la pagina

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

multiplicarForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  multiplicarDiv.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
