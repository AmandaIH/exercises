"use strict";

window.addEventListener("DOMContentLoaded", start);

let animals;

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      //   preparedObjects(jsonData);
      animals = jsonData;
    });
}

function preparedObjects(jsonData) {
  jsonData.forEach((jsonObject) => {});
  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document
    .querySelector("template#animal")
    .content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=fullname]").textContent = animal.fullname;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list").appendChild(clone);
}
