function factorial(num) {
  if (num === 0) return 1;
  let result = num;

  for (let i = num - 1; i >= 1; i -= 1) {
    result *= i;
  }
  return result;
}