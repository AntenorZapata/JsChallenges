function longestWord(str) {
  const wordArr = str.split(' ');
  let result = '';

  wordArr.forEach((element) => {
    if (element.length > result.length) {
      result = element;
    }
  });
  return result;
}

console.log(longestWord('My name is Vishwas'));

// - Returns 'Vishwas'

console.log(longestWord('Hello world'));

// - Returns 'Hello'
