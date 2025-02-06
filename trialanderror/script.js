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

// const people = ["Harry", "Ron", "Hermione"];

// let result;

// result = people.push("Draco");

// console.log(result);
// console.log(people);
// // man sætter Draco på og så "push", og den viser hvor mange der er i arrayet

// result = people.pop();
// console.log("people", people);
// console.log("result", result);
// //den fjerner Draco, så result er Draco
// result = people.push("Neville");
// result = people.push("Luna");
// console.log("people", people);
// console.log("result", result);
// //sætter Neville og Luna på arrayet
// result = people.slice(0, 3);
// console.log("people", people);
// console.log("result", result);
// //fjerner to, men de to sidste?
// result = people.splice(1, 0, "Cho");
// console.log("people", people);
// console.log("result", result);
// //den har sat Cho ind på plads 1
// people[1] = "Ginny";
// console.log("people", people);
// console.log("result", result);
// //sætter Ginny ind på plads 1
// result = people.push("Fred", "George");
// console.log("people", people);
// console.log("result", result);
// //Tilføjer Fred og George
// result = people.indexOf("Fred");
// console.log("people", people);
// console.log("result", result);
// //man ser hvilket nummer Fred er
// result = people.splice(result, 1);
// console.log("people", people);
// console.log("result", result);
// //den tager Fred ud af arrayet, og sætter ham ind i et nyt

// //immutable arrays
// const arr = [1, 2, 3];
// // const newArr = [0, ...arr];
// const newArr = arr.toSpliced(1, 1);
// console.log(arr, newArr);

// const letters = Array.from("abcdefghijklmn");
// console.log("letters", letters);
// //lave en string til et array
// // const str = "abcdefghijklmn";
// // const arr1 = str.split("");
// // const arr2 = Array.from(str);
// // const arr3 = [...str];

// // console.log(arr1);
// // console.log(arr2);
// // console.log(arr3);
// //ingen forskel på de tre metoder.

// const str = "The quick brown fox jumps over the lazy dog.";
// const words = str.split(" ");
// console.log(words);
// //Ordene bliver laver til array
// const chars = str.split("");
// console.log(chars);
// //Man får arrays med alle TEGN
// const strCopy = str.split();
// console.log(strCopy);
// //Man får et array med hele str, en kopi
// const splitOnM = str.split("m");
// console.log(splitOnM);
// //den splitter hvor end du beder den om det, for at lave det til flere arrays

// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }
// const sayHi = greeting;
// console.log(sayHi("Harry"));
// console.log(greeting("Amanda"));

// function congreet(firstName) {
//   console.log(`Hello ${firstName}`);
// }
// setTimeout(congreet, 5000, "Hisashi");

// function hire(person) {
//   person.hired = true;
// }
// function fire(person) {
//   person.hired = false;
// }

// function fireOrHire(action, person) {
//   action(person);
// }

// const person3 = {
//   firstName: "Harry",
//   lastName: "Potter",
//   hired: false,
// };
// const person4 = {
//   firstName: "Fred",
//   lastName: "Weasley",
//   hired: false,
// };
// console.log("person4", person4);
// // hire(person4);
// fireOrHire(hire, person4);
// //samme som at gøre det samme, så vi kalder en function med en anden function som parameter
// console.log("person4", person4);
// //den ændrer det til true efter vi hire Fred

//forEach callback function
// const people = ["Harry", "Ron", "Hermione", "Neville"];
// function sayHello(person) {
//   console.log(`Hello ${person}`);
// }

// // sayHello[people[0]];
// people.forEach(sayHello);

// function testParms(a, b, c, d) {
//   console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
// }
// people.forEach(testParms);
// //det er de tre første parametre der bliver brugt.

// //filter
// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// function isWordBigger(word) {
//   return word.length > 6;
// }

// const result = words.filter(isWordBigger);

// console.log(result);

// const animals = [
//   {
//     name: "Mandu",
//     type: "cat",
//   },
//   {
//     name: "Mia",
//     type: "cat",
//   },
//   {
//     name: "Mona",
//     type: "dog",
//   },
//   {
//     name: "Freddie",
//     type: "dog",
//   },
// ];
// function all(animal) {
//   return true;
// }
// function none(animal) {
//   return false;
// }
// console.log("ALL", animals.filter(all));

// function isCat(animal) {
//   if (animal.type === "cat") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(animals.filter(isCat));
// //det er det der bliver returneret

// function isDog(animal) {
//   if (animal.type === "dog") {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(animals.filter(isDog));

//OBJECTS
const person1 = {
  firstName: "Amanda",
  age: 30,
  student: true,
};
//console.log(`${object.firstName} er ${object.age}`);
// let name = object.firstName;
// console.log(object);
// object["firstName"] = "Bob";
// const propName = "age";
// console.log("age", object[propName]);
// console.log(object);
//man kan opnå det samme ved enten at sætte . notation eller []

// console.log("lastName", person1.lastName);
// person1.lastName = "Husum"; //nu har den oprettet en property - tilføjet lastName
// console.log("person1", person1);
// person1.lastName = undefined;
// delete person1.lastName;
console.log("person1", person1);
person1.age++;
console.log("person1", person1);

const person2 = {
  firstName: "Bob",
  age: 83,
  student: false,
};
// person1 = person2; man kan ikke gøre det her pga const, men man kan godt ændre inde i const

const student1 = {
  firstName: "Harry",
  lastName: "Potter",
};
const student2 = {
  firstName: "Harry",
  lastName: "Potter",
};

if (student1 === student2) {
  //de er ens i type og objekter hvis man sætter dem lig med hinanden, men hvis det er to objekter, så er de ikke ens
  console.log("de er ens");
} else {
  console.log("de er ikke ens");
}

//SWITCH case:
// function beautify(str){
// switch (str) {
// case undefined:
// break;
// case true:
// str = "X";
// break;
// }
// return str;
