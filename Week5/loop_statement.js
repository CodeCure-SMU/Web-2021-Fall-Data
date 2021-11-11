// for statement
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// while statement
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// for문으로 배열의 합 구하기
const scores = [10, 20, 30, 40, 50];

// 1번째 방법
let sum = 0;
for (let i = 0; i < 5; i++) {
  sum += scores[i];
}

// 2번째 방법
sum = 0;
for (let i = 0; i < scores.length; i++) {
  sum += scores[i];
}
console.log(sum);

// 3번째 방법
sum = 0;
for (const score of scores) {
  sum += score;
}
console.log(sum);

// 위에서 구한 합으로 평균 구하기
const average = sum / 5;
document.write("Average: " + average);

// n명의 학생의 점수의 평균 구하기
const n = parseInt(prompt("Input the number of students"));

const scores = [];
for (let i = 0; i < n; i++) {
  const score = parseInt(prompt("Input scores"));
  scores.push(score);
}

console.log(scores);

let sum = 0;
for (let i = 0; i < n; i++) {
  sum += scores[i];
}
document.write("Average: " + sum / n);
