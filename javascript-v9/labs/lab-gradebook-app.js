function getAverage(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum / arr.length;
}

function getGrade(score){
  if (score === 100) {
    return "A+";
  } else if (score >= 90 && score <= 99) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score >= 0 && score <= 59) {
    return "F";
  }
}

function hasPassingGrade(grade) {
  if (typeof grade === "number") {
    grade = getGrade(grade);
  }
  return grade !== "F";
}

function studentMsg(arr, score) {
  const avg = getAverage(arr);
  const grade = getGrade(score);

  if (score >= avg) {
    return `Class average: ${avg}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${avg}. Your grade: ${grade}. You failed the course.`;
  }
}

//console.log(hasPassingGrade(getGrade(getAverage([10, 20, 30, 40, 50, 60, 70, 97]))));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));