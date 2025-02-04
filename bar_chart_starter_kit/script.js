const list = document.querySelector("ul");

// const li = document.createElement("li");
// li.style.setProperty("--height", "30");
// list.appendChild(li);
// //generere en søjle
const barArray = [];

setInterval(generateBars, 1000);

function generateBars() {
  const randomNum = Math.round(Math.random() * 100);
  barArray.push(randomNum);

  console.log("GENERATE BARS", barArray);

  const li = document.createElement("li");
  li.style.setProperty("--height", randomNum);
  list.appendChild(li);

  if (barArray.length >= 20) {
    console.log("barArray er længere end 20");
    barArray.shift();
    list.removeChild(list.firstElementChild);
  }
}
