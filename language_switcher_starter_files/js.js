"use strict";

const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header-text" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header-text" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

function updateText(language) {
  const selectedTexts = texts[language].texts;
  selectedTexts.forEach(({ text, location }) => {
    const element = document.querySelector(location);
    if (element) {
      element.textContent = text;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const languageSwitcher = document.getElementById("languageSwitcher");

  languageSwitcher.addEventListener("change", (event) => {
    updateText(event.target.value);
  });

  updateText("da");
});
