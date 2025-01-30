"use strict";

const output = document.querySelector("#result");
const button = document.querySelector("button");

let vat = 25;

button.addEventListener("click", calculator);

function calculator() {
  let input = document.querySelector("#amount").value;
  let vatresult = null;

  vatresult = (input / 100) * vat;
  output.textContent = vatresult;
}
