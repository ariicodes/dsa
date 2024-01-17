// Implement a function to rotate the elements of an array to the right by a given number of steps.

const rotateArray = (steps, arr) => {
  const leftArr = arr.slice(0, steps)
  const results = arr.slice(steps)

  while (leftArr.length > 0) {
    results.push(leftArr.pop())
  }

  return results
}

const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const results = rotateArray(8, inputArray)

console.log(results)

/**
 * TIME & SPACE COMPLEXITY: O(n)
 */