function largestOfAll(arr) {
  const largestNumbers = [];
  for (const innerArray of arr) {
    let largestNumber = innerArray[0];
    for (const num of innerArray) {
      largestNumber = Math.max(largestNumber, num);
    }
    largestNumbers.push(largestNumber);
  }
  return largestNumbers;
}

console.log(largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
