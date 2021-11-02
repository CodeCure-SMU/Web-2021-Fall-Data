// variable_intermediate.js
const array = [10, 20, 30, 40, 50];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);

const student1 = ["Chulsu", 70, 80];
const student2 = ["Jinsu", 95, 60];
const student3 = ["Hoton", 80, 100];

const students1 = [
  ["Chulsu", 70, 80],
  ["Jinsu", 95, 60],
  ["Hoton", 80, 100],
];
// const students1 = [student1, student2, student3 ]

console.log(students1[0][0], students1[0][1], students1[0][2]);
console.log(students1[1][0], students1[1][1], students1[1][2]);
console.log(students1[2][0], students1[2][1], students1[2][2]);

const student4 = { name: "Chulsu", korean: 70, math: 80 };
const student5 = { name: "Jinsu", korean: 95, math: 60 };
const student6 = { name: "Hoton", korean: 80, math: 100 };

console.log(student4.name, student4.korean, student4.math);
console.log(student5.name, student5.korean, student5.math);
console.log(student6.name, student6.korean, student6.math);

const students2 = [
  { name: "Chulsu", korean: 70, math: 80 },
  { name: "Jinsu", korean: 95, math: 60 },
  { name: "Hoton", korean: 80, math: 100 },
];
// const students2 = [student4, student5, student6 ]

console.log(students2[0].name, students2[0].korean, students2[0].math);
console.log(students2[1].name, students2[1].korean, students2[1].math);
console.log(students2[2].name, students2[2].korean, students2[2].math);
