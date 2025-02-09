const str = "amanda";
const str2 = "amAnda";
const different = str.split("m");
const transformed =
  different[0] +
  "m" +
  different[1].slice(0, 2).toUpperCase() +
  different[1].slice(2);
const real = str[0].toUpperCase() + str.slice(1);

console.log(str.toUpperCase());
console.log(str2.toLowerCase());
console.log(transformed);
console.log(real);
