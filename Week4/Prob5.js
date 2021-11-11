const student1_name = prompt("Student1 name");
const student1_score = parseInt(prompt("Student1 score"));
const student2_name = prompt("Student2 name");
const student2_score = parseInt(prompt("Student2 score"));

const student1 = { name: student1_name, math: student1_score };
const student2 = { name: student2_name, math: student2_score };

document.write(student1.name + "의 수학 점수는 " + student1.math + "입니다.");
document.write(
  "<br />" + student2.name + "의 수학 점수는 " + student2.math + "입니다."
);
