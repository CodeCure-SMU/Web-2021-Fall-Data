// variable_basic.js;
const var1 = 1;
let var2 = 1;

console.log(var1, var2);

// const는 값 변경 불가!
var1 = 2;

var2 = 2;
console.log(var1, var2);

var2 = "Hello, World!";
console.log(var1, var2);

const integer = 10;
const float1 = 3.141592;
const boolean1 = true;
const string1 = "Hello";

console.log(integer + integer);
console.log(7 - 4);
console.log(5 * float1);
console.log(3 / integer);
console.log(10 % 3);

console.log(string1 + integer);
console.log(string1 + float1);
console.log(string1 + 10 + 3);
console.log(string1 + (10 + 3));

const input = prompt("Input some words!");
document.write("<br />" + input);

const a = prompt("Input a");
const b = prompt("Input b");
console.log(a + b);

const c = parseInt(prompt("Input c"));
const d = parseInt(prompt("Input d"));

const e = parseFloat(prompt("Input e"));
const f = parseFloat(prompt("Input f"));
console.log(e + f);
