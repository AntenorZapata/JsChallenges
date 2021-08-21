function sumAll(arr) {
	const max = Math.max(...arr);
	const min = Math.min(...arr);
	const range = [...Array(max - min + 1).keys()].map(i => i + min);
	return range.reduce((acc,curr) => {
		return acc + curr
	},0)
}

;
console.log(sumAll([1,4]));