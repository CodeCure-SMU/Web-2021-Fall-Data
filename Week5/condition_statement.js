const score = parseInt(prompt("Input score"));

if (score > 90) {
  document.write("PASS!");
} else {
  document.write("FAIL...");
}

if (score > 90) {
  document.write("Congratulation");
}

// 중첩 if 문
if (score >= 90) {
  document.write("You are A!");
} else {
  if (score >= 80) {
    document.write("You are B!");
  } else {
    if (score >= 70) {
      document.write("You are C!");
    } else {
      document.write("You are Fail!");
    }
  }
}

if (score >= 90) {
  document.write("You are A!");
} else if (score >= 80) {
  document.write("You are B!");
} else if (score >= 70) {
  document.write("You are C!");
} else if (score >= 60) {
  document.write("You are D!");
} else {
  document.write("You are Fail!");
}
