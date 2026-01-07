function titleCase(str) {
  const words = str.split(" ");
  const adjusted = [];
  for (const word of words) {
    const letters = word.split("");
    const adjustedWord = [word[0].toUpperCase()];
    for (let idx = 1; idx < letters.length; ++idx) {
      adjustedWord.push(letters[idx].toLowerCase());
    }
    const finalWord = adjustedWord.join("");
    adjusted.push(finalWord);
  }

  return adjusted.join(" ");
}

console.log(titleCase("I like to code"));
console.log(titleCase("javaScript is fun"));