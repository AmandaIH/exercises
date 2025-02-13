async function fetchData() {
  const response = await fetch("https://kea-alt-del.dk/kata-distortion/");
  const data = await response.json();
  const queueElement = document.getElementById("queueCount");

  queueElement.innerText = data.inQueue;

  queueElement.classList.remove("grow", "pulse", "color-shift-animation");

  void queueElement.offsetWidth;

  queueElement.classList.add("grow", "pulse", "color-shift-animation");

  setTimeout(() => {
    queueElement.classList.remove("pulse");
  }, 1000);
}

fetchData();
setInterval(fetchData, 10000);
