function chunkArrayInGroups(arr, num) {
  const arrays = [], length = arr.length;
  let currLength = 0;
  while(currLength + num <= length) {
    arrays.push(arr.slice(currLength, currLength + num));
    currLength += num;
  }
  if (currLength < length) {
    arrays.push(arr.slice(currLength , length));
  }
  return arrays;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));