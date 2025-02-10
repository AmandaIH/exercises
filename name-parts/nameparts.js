const theName = "Peter Heronimous Lind";
const firstName = theName.substring(0, theName.indexOf(" "));
console.log("firstName", firstName);

const middleName = theName.substring(
  theName.indexOf(" ") + 1,
  theName.lastIndexOf(" ")
);
console.log("middleName", middleName);

const lastName = theName.substring(theName.lastIndexOf(" ") + 1);
console.log("lastsName", lastName);
// console.log(firstName.indexOf("P"));
// console.log(firstName.substring(0, 5));

// console.log(middleName.indexOf("H"));
// console.log(middleName.substring(0, 10));

// console.log(lastName.indexOf("L"));
// console.log(lastName.substring(0, 4));
