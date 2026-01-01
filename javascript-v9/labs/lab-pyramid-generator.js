function pyramid(char, rowsCount, bool) {
  const rows = [];
  let row = 1, currCharsPerRow = 1;

  while (row <= rowsCount) {
    rows.push(" ".repeat(rowsCount - row) + char.repeat(currCharsPerRow) + "\n");
    row++;
    currCharsPerRow += 2;
  }

  let pyramid = "";
  if (bool === true) {
    rows.push("\n");
    for (let i = rows.length - 1; i >= 0; --i) {
      pyramid += rows[i];
    }
  } else {
    rows.unshift("\n");
    for (let i = 0; i < rows.length; ++i) {
      pyramid += rows[i];
    }
  }
  
  return pyramid;
}

console.log(pyramid("o", 4, false));
