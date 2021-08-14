  let result = '';

  str.split(' ').forEach((word) => {
    const newWord = word.split('').reverse();
    result += newWord.join('');
    result += ' ';
  });
  return result;