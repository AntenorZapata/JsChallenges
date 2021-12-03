const arr = [5, 1, 22, 25, 6, -1, 8, 10];
const sub = [1, 6, 8, 10];

const checkSubsequence = (arr, sub) => {
  const result = [];

  for (const num of arr) {
    if (sub.includes(num)) {
      result.push(num);
    }
  }

  return result.toString() === sub.toString();
};

console.log(checkSubsequence(arr, sub));
