// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reduce((result, item) => {
    return item + result;
  }, '');
}

module.exports = reverse;

console.log(reverse('apple'));

// Maneira mais verbosa
const reverseFrase = (str) => {
  let result = '';

  str.split(' ').forEach((word) => {
    const newWord = word.split('').reverse();
    result += newWord.join('');
    result += ' ';
  });
  return result;
};

// Sem usar métodos

const reverseStr = (str) => {
  let result = '';

  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  return result;
};

console.log(reverseStr('string'));
