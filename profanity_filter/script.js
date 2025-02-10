// Definerer de "dårlige" og "gode" ord
const curseWords = [
  { bad: "var", good: "<span class='highlight'>const</span>" },
  { bad: "float", good: "<span class='highlight'>grid</span>" },
  { bad: "marquee", good: "<span class='highlight'>just don't</span>" },
];

const textElement = document.getElementById("text");
const replaceBtn = document.getElementById("replaceBtn");
const infoDialog = document.getElementById("infoDialog");
const closeDialog = document.getElementById("closeDialog");

replaceBtn.addEventListener("click", () => {
  let text = textElement.innerHTML;
  let updated = false;

  // Erstat dårlige ord med gode ord
  curseWords.forEach(({ bad, good }) => {
    const regex = new RegExp(`\\b${bad}\\b`, "g");
    if (text.match(regex)) {
      updated = true;
      text = text.replace(regex, good);
    }
  });

  if (updated) {
    textElement.innerHTML = text;
  } else {
    infoDialog.showModal();
  }
});

closeDialog.addEventListener("click", () => {
  infoDialog.close();
});
