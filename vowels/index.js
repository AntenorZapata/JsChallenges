// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowls = 'aeiou';
  let count = 0;

  for (let letter of str) {
    if (vowls.includes(letter.toLowerCase())) {
      count += 1;
    }
  }
  return count;
}


module.exports = vowels;
