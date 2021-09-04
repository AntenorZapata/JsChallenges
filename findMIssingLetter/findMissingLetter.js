const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const indexFirst = alphabet.indexOf(array[0].toLowerCase());
  const indexLast = alphabet.indexOf(array[array.length - 1].toLowerCase());
  const newStr = alphabet.slice(indexFirst, indexLast + 1);
  const strArray = array.join('').toLowerCase();
  let result = '';

  [...newStr].map((el) => {
    if (!strArray.includes(el)) {
      result += el;
    }
  });
  return array[0] === array[0].toLowerCase()
    ? result.toLowerCase()
    : result.toUpperCase();
};

const arr = ['O', 'Q', 'R', 'S'];
// ["O","Q","R","S"] -> "P"

console.log(findMissingLetter(arr));
