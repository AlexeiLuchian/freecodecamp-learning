function mutation(arr) {
  const string = arr[0].toLowerCase(), substring = arr[1].toLowerCase();
  for (const letter of substring) {
    if (!string.includes(letter)) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));