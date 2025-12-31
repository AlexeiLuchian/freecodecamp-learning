function fearNotLetter(str) {
  let offset = 0, firstLetter = str.charCodeAt(0);
  for (const letter of str) {
    if (letter !== String.fromCharCode(firstLetter + offset)) {
      return String.fromCharCode(firstLetter + offset);
    }
    offset++;
  }
}

console.log(fearNotLetter("stvwx"));