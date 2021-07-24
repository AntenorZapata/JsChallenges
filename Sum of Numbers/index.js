function sum(arr) {
  const sumNums = arr.reduce((acc, curr) => (acc += curr), 0);
  let sumRange = 0;
  const newArr = arr.sort();
  for (let i = newArr[0] + 1; i < newArr[1]; i += 1) {
    sumRange += i;
  }
  console.log(sumNums + sumRange);
}

sum([2, 7]);
sum([7, 2]);


