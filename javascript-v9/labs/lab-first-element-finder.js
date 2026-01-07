function findElement(array, func) {
  for (const item of array) {
    if (func(item)){
      return item;
    }
  }
} 

console.log(findElement([1, 3, 5, 8], num => num % 2 === 0)) // returns 8
console.log(findElement([1, 3, 5], num => num % 2 === 0))    // returns undefined
