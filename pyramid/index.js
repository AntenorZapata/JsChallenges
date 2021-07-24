// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  // let mid = n - 1;
  // if (n % 2 !== 0) mid = (n + 1) / 2;
  const mid = Math.floor((2 * n - 1) / 2);
  let midLeft = mid;
  let midRight = mid;
  let result = '';
  const symbol = '#';
  const turn = n * 2 - 1;

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < turn; j += 1) {
      if (j >= midLeft && j <= midRight) {
        result += symbol;
      } else {
        result += ' ';
      }
    }
    console.log(result);
    midLeft -= 1;
    midRight += 1;
    result = '';
  }
}

module.exports = pyramid;

console.log(pyramid(3));
// let middle = (n + 1) / 2;
// let middleLeft = middle;
// let middleRight = middle;
// let result = '';

// for (let j = 0; j < middle; j++) {
// 	for (let i = 1; i < n + 1; i++) {
// 		if (i < middleRight && i > middleLeft) {
// 			result += '*';
// 		} else {
// 			result += ' ';
// 		}
// 	}
// 	middleLeft -= 1;
// 	middleRight += 1;
// 	console.log(result);
// 	result = '';
// }
