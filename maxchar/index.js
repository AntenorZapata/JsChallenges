// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  let total = 0;
  let result = '';

  for (const item of str) {
    if (!obj[item]) {
      obj[item] = 1;
    }
    obj[item] += 1;
  }

  for (const elem in obj) {
    if (obj[elem] > total) {
      total = obj[elem];
      result = elem;
    }
  }

  return result;
}

module.exports = maxChar;

console.log(maxChar('abcccccccd'));
