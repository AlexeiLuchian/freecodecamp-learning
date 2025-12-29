function confirmEnding(string, checkString) {
  const checkStringStartIdx = string.indexOf(checkString, string.length - checkString.length);
  const stringIncludesCheck = string.includes(checkString);

  if (stringIncludesCheck && checkStringStartIdx === string.length - checkString.length) {
    return true;
  }
  return false;
}