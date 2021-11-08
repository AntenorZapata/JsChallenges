// function fahrenheit_to_celsius(temp_fahrenheit) {

// 	return ((temp_fahrenheit - 32) / 1.8).toFixed(1)

// }

// console.log(fahrenheit_to_celsius(50));

// DOIS

// function difference(x) {
// 	// Write your code here
// 	return Math.abs(x - 10)

// }

// TRES
// function count_down(x) {
//   let a = '';
//   for (let i = x; i >= 0; i--) {
//     if (i === 0) {
//       a += i + '!!!';
//     } else {
//       a += i + '...';
//     }
//   }

//   return a;
// }

// console.log(count_down(10));

// QUANTRO

// function multiples_of_3_or_5(roof) {
//   let result = 0;
//   for (let i = 0; i < roof; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       a += i;
//     }
//   }
//   return result;
// }

// console.log(multiples_of_3_or_5(10));

// QUINTO

// function even_fibonacci_numbers(roof) {
//   const arr = [1, 2];
//   let result = 0;

//   for (let i = 0; i < roof; i++) {
//     arr.push(arr[i] + arr[i + 1]);
//     if (arr[i] < roof && arr[i] % 2 === 0) {
//       result += arr[i];
//     }
//   }

//   return result;
// }

// console.log(even_fibonacci_numbers(100));

// const prime = (n) => {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//     return n > 1;
//   }
// };

// // SEXTO
// function nth_prime(n) {  const arr = [];

//   for (let i = 1; arr.length <= n; i++) {
//     if (prime(i)) {
//       arr.push(i);
//     }
//   }
//   return arr[n - 1];
// }

// console.log(nth_prime(6));

// SETE
// const prime = (n) => {
//   for (let i = 2; i < n; i++)
//     if (n % i === 0) {
//       return false;
//     }
//   return n > 1;
// };

// function largest_prime_factor(number) {
//   // Write your code here
//   const arr = [];

//   for (let i = 1; i <= number; i++)
//     if (number % i === 0 && prime(i)) {
//       arr.push(i);
//     }

//   return arr[arr.length - 1];
// }

// console.log(largest_prime_factor(13195));

// OITRO

// function caixa(...values) {
//   let index = 0;
//   let result = [];

//   for (let i = 0; i < values.length; i++) {
//     if (values[i] !== 0) {
//       result.push(values[i]);
//     } else {
//       result.pop();
//     }
//   }
//   return result.reduce((acc, curr) => acc + curr);
// }

// console.log(caixa(1, 3, 5, 4, 0, 0, 7, 0, 0, 6));

// nove

// const isTrue = (n, roof) => {
//   let count = 0;
//   for (let i = 1; i <= roof; i++) {
//     if (n % i === 0) {
//       count += 1;
//     }
//   }
//   return count === roof;
// };

// function smallest_multiple(roof) {
//   // Write your code here
//   let result = 0;
//   let condition = false;
//   let num = 1;

//   while (!condition) {
//     if (isTrue(num, roof)) {
//       result = num;
//       condition = true;
//     }
//     num += 1;
//   }
//   return result;
// }

// console.log(smallest_multiple(10));

// DEZ

// const squareNum = (n) => {
//   const sum = Array.from(Array(n + 1).keys());
//   const result = sum.reduce((acc, curr) => {
//     acc += curr ** 2;
//     return acc;
//   }, 0);
//   return result;
// };

// const squereAll = (n) => {
//   const sum = Array.from(Array(n + 1).keys());
//   const result = sum.reduce((acc, curr) => acc + curr);
//   return result ** 2;
// };

// const square = (n, mod) => {
//   const sum = Array.from(Array(n + 1).keys());

//   if (mod === 'all') {
//     const result = sum.reduce((acc, curr) => acc + curr);
//     return result ** 2;
//   }
//   const result = sum.reduce((acc, curr) => {
//     acc += curr ** 2;
//     return acc;
//   }, 0);
//   return result;
// };

// function sum_square_difference(n) {
//   // Write your code here

//   const sqAll = square(n, 'all');
//   const sqNum = square(n, 'num');
//   return sqAll - sqNum;
// }

// console.log(sum_square_difference(10));

// onze

function lychrel_numbers(n) {
  const letter = n.toString().toString();
  const sum = n
    .toString()
    .split('')
    .reduce((acc, curr) => +acc + +curr);
  console.log(sum);

  // const a = sum.reduce((acc, curr) => acc + curr);

  // console.log(sum);
  // // return letter.split('').reverse().join('') === letter;
  // // Write your code here
}

console.log(lychrel_numbers(349));
