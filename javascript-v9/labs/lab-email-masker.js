function maskEmail(email) {
  const domainStartIdx = email.indexOf("@");
  const partToMask = email.slice(1, domainStartIdx - 1);
  const mask = "*".repeat(partToMask.length);
  const maskedEmail = email.replace(partToMask, mask);
  return maskedEmail;
}

let email = "apple.pie@example.com";
console.log(maskEmail(email));
email = "freecodecamp@example.com";
console.log(maskEmail(email));
email = "info@test.dev";
console.log(maskEmail(email));
email = "user@domain.org";
console.log(maskEmail(email));