const caesarCipher = (str, num) => {
  const alpha = Array.from(Array(26)).map((i, index) => index + 65);
  const alphabet = alpha.map((item) => String.fromCharCode(item));
  let result = '';

  str.split('').forEach((letter) => {
    let index = alphabet.indexOf(letter.toUpperCase());

    if (Math.sign(num) === 1) {
      if (index === alphabet.length - 1) {
        index = 0;
        result += alphabet[index + num - 1];
      } else if (index < 0) {
        result += ' ';
      } else {
        result += alphabet[index + num];
      }
    } else {
      if (index < 0) {
        result += ' ';
      } else {
        result += alphabet[index - Math.abs(num)];
      }
    }
  });
  return result.toLowerCase();
};

console.log(caesarCipher('zoo keeper', 2));