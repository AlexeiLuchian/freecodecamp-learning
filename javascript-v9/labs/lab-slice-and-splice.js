function frankenSplice(array1, array2, index) {
  const lettersArray = [];
  for (let i = 0; i < index; ++i) {
    lettersArray.push(array2[i])
  }
  for (const char of array1) {
    lettersArray.push(char);
  }
  for (let i = index; i < array2.length; ++i) {
    lettersArray.push(array2[i]);
  }
  return lettersArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));
