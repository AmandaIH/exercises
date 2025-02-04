const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

const button = document.querySelector(".button");

button.addEventListener("click", () => {
  lavsti();
});

function lavsti() {
  bc.forEach((element) => {
    console.log(element.name);

    if (bc[bc.length - 1].name === element.name) {
      document.querySelector("ul").innerHTML += `<li>${element.name}</li>`;
    } else {
      document.querySelector(
        "ul"
      ).innerHTML += `<li><a href=${element.link}>${element.name}/</a></li>`;
    }
  });
}

// document.querySelector(
//   "ul"
// ).innerHTML += `<li><a href="">dette er et andet link</a></li>`;

//  document.querySelector(
//   "ul"
// ).innerHTML = `<li><a href=""></a></li>`;

// console.log(arr[arr.length - 1]);

// mellemrum &nbsp;
