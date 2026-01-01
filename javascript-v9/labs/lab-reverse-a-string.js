function reverseString(str) {
  const letters = str.split("");
  const reverseLetters = letters.reverse();
  return reverseLetters.join("");
}

console.log(reverseString("hello"));
