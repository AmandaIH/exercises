const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const alleElDrevneFartoejer = vehicles.filter((veh) => veh.isElectric === true);

const twoPassengers = vehicles.filter((two) => two.passengers > 2);

const Jonas = vehicles.filter(
  (jonas) => jonas.ownedBy === "Jonas" && jonas.isElectric === true
);

const ryeBread = vehicles.filter((ryebread) => ryebread.isTandem === true);

document.querySelector("body").innerHTML += `<button id="allbt">All</button>`;
document.querySelector(
  "body"
).innerHTML += `<button id="elbt">Electric</button>`;
document.querySelector(
  "body"
).innerHTML += `<button id="two">More than two passengers</button>`;
document.querySelector(
  "body"
).innerHTML += `<button id="jonas">Owned by Jonas</button>`;
document.querySelector(
  "body"
).innerHTML += `<button id="ryebread">Ryebread fuel</button>`;

const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);

const Allbt = document.querySelector("#allbt");
Allbt.addEventListener("click", () => {
  showTheseVehicles(vehicles);
});

const elbt = document.querySelector("#elbt");
elbt.addEventListener("click", () => {
  showTheseVehicles(alleElDrevneFartoejer);
});

const twobt = document.querySelector("#two");
twobt.addEventListener("click", () => {
  showTheseVehicles(twoPassengers);
});

const jonasbt = document.querySelector("#jonas");
jonasbt.addEventListener("click", () => {
  showTheseVehicles(Jonas);
});

const ryebreadbt = document.querySelector("#ryebread");
ryebreadbt.addEventListener("click", () => {
  showTheseVehicles(ryeBread);
});

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";

  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${each.type}</td>
  <td>${each.fuel}</td>
  <td>${each.passengers}</td> 
  <td>${each.stops}</td>
  <td>${each.ownedBy}</td>
  <td>${each.isElectric}</td>
  <td>${each.isTandem}</td>
</tr>`;
  });

  const allCells = document.querySelectorAll("td");
  allCells.forEach((cell) => {
    if (cell.textContent === "undefined") {
      cell.textContent = "";
    }
    if (cell.textContent === "true") {
      cell.textContent = "Yes";
    }
    if (cell.textContent === "false") {
      cell.textContent = "";
    }
  });

  // en anden måde at gøre det på, som Klaus synes er bedre:

  //<td>${beautify(each.type)}</td>
  //<td>${beautify(each.fuel)}</td>
  //<td>${beautify(each.passengers)}</td>
  //<td>${beautify(each.stops)}</td>
  //<td>${beautify(each.ownedBy)}</td>
  //<td>${beautify(each.isElectric)}</td>
  //<td>${beautify(each.isTandem)}</td>

  // function beautify(str)  {
  // if (str === undefined) {
  // str = "-";
  // }
  // return str;
  // if (str === true) {
  // str = "X";
  // }
  // return str;
}
