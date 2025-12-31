function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  } else {
    let result = "";
    for (let i = 0; i < num; ++i) {
      result += str;
      console.log(result);
    }
    return result;
  }
}