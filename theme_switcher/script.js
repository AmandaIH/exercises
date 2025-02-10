document
  .getElementById("theme-selector")
  .addEventListener("change", function () {
    document.body.setAttribute("data-theme", this.value);
  });
