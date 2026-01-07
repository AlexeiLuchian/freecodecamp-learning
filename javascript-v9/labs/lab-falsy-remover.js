function bouncer(arr) {
  const valid = [];
  for (const val of arr) {
    if(val) {
      valid.push(val);
    }
  }
  return valid;
}

console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([7, "ate", "", false, 9]));