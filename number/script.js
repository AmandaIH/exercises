const min = 1;
const max = 100;

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Random Number: ", randomNumber);

document.querySelector("button").addEventListener("click", evaluateTextField);

function evaluateTextField() {
  console.log("CLICK");

  const brugerInput = document.querySelector(".userNumber").value;
  const brugerSvar = document.querySelector(".text");

  if (brugerInput < randomNumber) {
    brugerSvar.textContent = "Too low! Try again";
  } else if (brugerInput > randomNumber) {
    brugerSvar.textContent = "Too high! Try again.";
  } else {
    brugerSvar.textContent = "You guessed correct!";
  }
}
