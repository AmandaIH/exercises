// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }
// // const result = greeting("any name");
// // const txt = `Greeting is ${greeting("a name")}`;

// const personToGreet = "Amanda";
// //function-kald er "det samme" som dets return-værdi

// const greetingToAmanda = greeting(personToGreet);
// //variablen lig med return-værdien

// console.log(greetingToAmanda);
// console.log(greeting("Amanda")); //to måder at gøre en ting på

// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }
// function lengthOfStr(str) {
//   return str.length;
// }
// const greetingToAmanda = greeting("Amanda");
// console.log(lengthOfStr("Amanda")); //tæller bogstaverne
// console.log(lengthOfStr(greeting("Amanda"))); //den tæller både hello mellemrum og navn

// ARRAYS
// let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
// console.log(letters[4]);
// her får man e, fordi det starter med 0
// let newarr = letters;
// newarr[4] = "*";
// console.log(letters[4]);
//her har den skiftet e'et ud med *

//ingen forskel på letters og newarr
//man kan ikke ændre et af arrayene uden at ændre det andet, fordi det er to referencer til det samme array
//man må gerne bruge const i stedet for let

const people = ["Harry", "Ron", "Hermione"];

let result;

result = people.push("Draco");

console.log(result);
console.log(people);
// man sætter Draco på og så "push", og den viser hvor mange der er i arrayet

result = people.pop();
console.log("people", people);
console.log("result", result);
//den fjerner Draco, så result er Draco
result = people.push("Neville");
result = people.push("Luna");
console.log("people", people);
console.log("result", result);
//sætter Neville og Luna på arrayet
result = people.slice(0, 3);
console.log("people", people);
console.log("result", result);
//fjerner to, men de to sidste?
result = people.splice(1, 0, "Cho");
console.log("people", people);
console.log("result", result);
//den har sat Cho ind på plads 1
people[1] = "Ginny";
console.log("people", people);
console.log("result", result);
//sætter Ginny ind på plads 1
result = people.push("Fred", "George");
console.log("people", people);
console.log("result", result);
//Tilføjer Fred og George
result = people.indexOf("Fred");
console.log("people", people);
console.log("result", result);
//man ser hvilket nummer Fred er
result = people.splice(result, 1);
console.log("people", people);
console.log("result", result);
//den tager Fred ud af arrayet, og sætter ham ind i et nyt

//immutable arrays
const arr = [1, 2, 3];
// const newArr = [0, ...arr];
const newArr = arr.toSpliced(1, 1);
console.log(arr, newArr);

const letters = Array.from("abcdefghijklmn");
console.log("letters", letters);
//lave en string til et array
// const str = "abcdefghijklmn";
// const arr1 = str.split("");
// const arr2 = Array.from(str);
// const arr3 = [...str];

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
//ingen forskel på de tre metoder.

const str = "The quick brown fox jumps over the lazy dog.";
const words = str.split(" ");
console.log(words);
//Ordene bliver laver til array
const chars = str.split("");
console.log(chars);
//Man får arrays med alle TEGN
const strCopy = str.split();
console.log(strCopy);
//Man får et array med hele str, en kopi
const splitOnM = str.split("m");
console.log(splitOnM);
//den splitter hvor end du beder den om det, for at lave det til flere arrays

function greeting(firstName) {
  return `Hello ${firstName}`;
}
const sayHi = greeting;
console.log(sayHi("Harry"));
console.log(greeting("Amanda"));

function congreet(firstName) {
  console.log(`Hello ${firstName}`);
}
setTimeout(congreet, 5000, "Hisashi");

function hire(person) {
  person.hired = true;
}
function fire(person) {
  person.hired = false;
}

function fireOrHire(action, person) {
  action(person);
}

const person3 = {
  firstName: "Harry",
  lastName: "Potter",
  hired: false,
};
const person4 = {
  firstName: "Fred",
  lastName: "Weasley",
  hired: false,
};
console.log("person4", person4);
// hire(person4);
fireOrHire(hire, person4);
//samme som at gøre det samme, så vi kalder en function med en anden function som parameter
console.log("person4", person4);
//den ændrer det til true efter vi hire Fred
