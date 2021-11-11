// 함수 내에서 평균을 구한뒤 출력
function getAverage1() {
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
  console.log("Average: " + sum / n);
}

getAverage1();

// 함수 내에서 평균을 구한 뒤 반환
function getAverage2() {
  const n = parseInt(prompt("Input the number of students"));

  const scores = [];
  for (let i = 0; i < n; i++) {
    const score = parseInt(prompt("Input scores"));
    scores.push(score);
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += scores[i];
  }

  const average = sum / n;

  return average;
}

getAverage2(); // 아무일도 일어나지 않음

// 구한 평균이 average에 저장
const average = getAverage2();
console.log(average);
// console.log(getAverage2());

// 매개변수가 있는 함수 (근의 공식)
function QuadraticFormula(a, b, c) {
  return [
    (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a),
    (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a),
  ];
}

console.log(QuadraticFormula(1, 3, 2));
console.log(QuadraticFormula(2, 8, 6));

/* ============ 아래 코드는 ES6의 Arrow Function (몰라도 괜찮으니 참고만)============ */
const getAverage1 = () => {
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
  console.log("Average: " + sum / n);
};

getAverage1();

const getAverage2 = () => {
  const n = parseInt(prompt("Input the number of students"));
  const scores = [];
  for (let i = 0; i < n; i++) {
    const score = parseInt(prompt("Input scores"));
    scores.push(score);
  }
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += scores[i];
  }
  const average = sum / n;
  return average;
};

getAverage2();

const QuadraticFormula1 = (a, b, c) => {
  return [
    (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a),
    (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a),
  ];
};

// {}가 아닌 ()로 감싸거나 배열인 경우 []로 감싸면 자동으로 return
const QuadraticFormula2 = (a, b, c) => [
  (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a),
  (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a),
];

console.log(QuadraticFormula2(1, 3, 2));
