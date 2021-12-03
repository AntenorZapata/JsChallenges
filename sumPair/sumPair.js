const arr = [3, 5, -4, 8, 11, 1, -1, 6];

const sumPair = (arr, num) => {
  const result = [];
  const obj = { 1: "sim" };
  for (const i of arr) {
    for (const j of arr) {
      if (i !== j && i + j === num) {
        if (!result.includes(i) && !result.includes(j)) {
          result.push(i, j);
        }
      }
    }
  }

  for (const i of arr) {
    if (num - i in obj) {
      console.log(obj);
      return [num - i, i];
    }
    obj[i] = true;
  }
  return [];

  // return result;
};

console.log(sumPair(arr, 10));
