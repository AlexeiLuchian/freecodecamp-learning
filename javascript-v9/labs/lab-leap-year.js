const year = 1900;

function isLeapYear(year) {
  let isLeap = false;
  if (year % 4 === 0) {
    isLeap = true;
    if (year % 100 === 0) {
      isLeap = false;
      if (year % 400 === 0) {
        isLeap = true;
      }
    }
  }
  return isLeap ? `${year} is a leap year.` : `${year} is not a leap year.`;
}

const result = isLeapYear(year);
console.log(result);