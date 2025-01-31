const output = document.querySelector("#result");
const button = document.querySelector("button");

let input = document.querySelector("#amount").value;
let taxprocent = 25;

button.addEventListener("click", calculator);

function calculator(tax, taxamount) {
  input = parseInt(input);

  tax = taxprocent / 100;

  taxamount = input * tax;

  taxresult = input + taxamount;

  output.textContent = taxresult;
  console.log("Result", taxresult);
}
