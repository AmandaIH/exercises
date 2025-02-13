document.addEventListener("mousemove", (event) => {
  let lightness = (event.clientX / window.innerWidth) * 100;
  let saturation = (event.clientY / window.innerHeight) * 100;

  document.documentElement.style.setProperty("--lightness", `${lightness}%`);
  document.documentElement.style.setProperty("--saturation", `${saturation}%`);
});
