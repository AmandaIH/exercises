document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("netflixButton");
  let hasInteracted = false;
  let animationTimeout;
  let mouseMoved = false;

  function startAnimation() {
    button.classList.add("filled");
    animationTimeout = setTimeout(() => {
      if (hasInteracted && mouseMoved) {
        triggerAction();
      }
    }, 3000);
  }

  function triggerAction() {
    document.body.style.backgroundColor = "red";
    button.remove();

    const message = document.createElement("div");
    message.innerText = "Knappen er klikket";
    message.classList.add("message");
    document.body.appendChild(message);
  }

  button.addEventListener("click", function () {
    hasInteracted = true;
    triggerAction();
  });

  document.addEventListener(
    "mousemove",
    function () {
      if (hasInteracted) {
        mouseMoved = true;
        clearTimeout(animationTimeout);
        button.classList.add("filled");
      }
    },
    { once: true }
  );

  startAnimation();
});
