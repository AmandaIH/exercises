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
  let words = textElement.innerHTML.split(" ");
  let updated = false;

  let newWords = words.map((word) => {
    let replacement = curseWords.find(({ bad }) => bad === word);
    if (replacement) {
      updated = true;
      return replacement.good;
    }
    return word;
  });

  if (updated) {
    textElement.innerHTML = newWords.join(" ");
  } else {
    infoDialog.showModal();
  }
});

closeDialog.addEventListener("click", () => {
  infoDialog.close();
});
