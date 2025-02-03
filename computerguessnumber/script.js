let min = 0;
let max = 100;

let guessNumber;

const startButton = document.querySelector(".start");
const lowButton = document.querySelector(".low");
const highButton = document.querySelector(".high");
const rightButton = document.querySelector(".right");
const displayGuess = document.querySelector(".theguess");

window.addEventListener("load", start);

function start() {
  startButton.addEventListener("click", () => {
    min = 0;
    max = 100;
    computerGuess();
  });
  lowButton.addEventListener("click", () => {
    min = guessNumber + 1;
    computerGuess();
  });
  highButton.addEventListener("click", () => {
    max = guessNumber - 1;
    computerGuess();
  });
  rightButton.addEventListener("click", () => {
    celebrate();
  });

  disableButtons();
}

function computerGuess() {
  if (min > max) {
    disableButtons();
    return;
  }

  guessNumber = Math.floor((min + max) / 2);
  displayGuess.textContent = `${guessNumber}`;

  enableButtons();
}

function celebrate() {
  displayGuess.textContent = `YAY! I guessed it ${guessNumber}`;
  displayGuess.classList.add("celebrate-animation");

  const confetti = document.querySelector(".confetti");
  confetti.style.display = "block";

  disableButtons();
}

function disableButtons() {
  lowButton.disabled = true;
  highButton.disabled = true;
  rightButton.disabled = true;
}

function enableButtons() {
  lowButton.disabled = false;
  highButton.disabled = false;
  rightButton.disabled = false;
}
