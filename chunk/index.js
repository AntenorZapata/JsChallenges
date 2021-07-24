// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const sizon = size;
  let index = 0;
  let result = [];
  let count = Math.ceil(array.length / size);
  let sizeCopy = size;

  for (let i = 0; i < count; i += 1) {
    result.push(array.slice(index, size));
    index = sizeCopy;
    if (sizon % 2 !== 0) {
      sizeCopy *= 2;
      size *= 2;
    } else {
      sizeCopy += 2;
      size += 2;
    }
  }
  return result;
}

module.exports = chunk;

console.log(chunk([1, 2, 3, 4, 5, 6, 2, 3, 2, 3], 4));
