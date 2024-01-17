// Write a function to remove duplicates from an array and return the unique elements.

const removeDuplicates = arr => {
	const uniqueElements = [];

	arr.forEach(e => {
		if (!uniqueElements.includes(e)) {
			uniqueElements.push(e);
		}
	});

	return uniqueElements;
};

const inputArray = [1, 2, 2, 3, 4, 4, 5, 12, 12, 15, 16, 12, 18, 19];
const resultArray = removeDuplicates(inputArray);

console.log(resultArray);

/**
 * TIME COMPLEXITY: O(n^2)
 * SPACE COMPLEXITY: O(n)
 */