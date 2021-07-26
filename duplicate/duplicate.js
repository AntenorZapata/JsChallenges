function findDuplicate(arr) {
  return arr.filter((item, index) => arr.indexOf(item) != index);
}

input: arr = [2, 4, 6, 8, 2];

console.log(findDuplicate(arr));

// - Returns 2
