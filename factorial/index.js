function factorial(num) {
  if (num === 0) return 1;
  let result = num;

  for (let i = num - 1; i >= 1; i -= 1) {
    result *= i;
  }
  return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));
