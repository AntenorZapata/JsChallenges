const union = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

const intersection = (arr1, arr2, bool) => {
  const result = [];
  if (bool) {
    arr1.map((item) => {
      if (arr2.includes(item)) {
        result.push(item);
      }
    });
  } else {
    arr1.map((item) => {
      if (!arr2.includes(item)) {
        result.push(item);
      }
    });
  }

  return result;
};

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];

// console.log(union(arr1, arr2));
// - Returns [1, 2, 3, 2, 3, 4]

// console.log(intersection(arr1, arr2, true));
// // - Returns [2, 3]

// console.log(intersection(arr1, arr2, false));
// // - Returns [1]


// symmetricDifference(arr1, arr2);
// //  - Returns [1, 4]
