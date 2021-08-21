function diffArray(arr1,arr2) {
	const newArr = [];

	arr2.forEach(element => {
		if (!arr1.includes(element)) {
			newArr.push(element)
		}
	});

	arr1.forEach(element => {
		if (!arr2.includes(element)) {
			newArr.push(element)
		}
	});

	return newArr
}



console.log(diffArray(["andesite","grass","dirt","pink wool","dead shrub"],["diorite","andesite","grass","dirt","dead shrub"]));