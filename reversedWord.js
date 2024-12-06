
// Reverse entire string
function solution(str) {
	let reversedText = str
	reversedText = reversedText.split('').reverse().join('')
	return reversedText
}

let text = solution('world')

// convert integer to string
function numberToString(num) {
	let covertedString = String(num)
	return covertedString
}


//Finding positive number of array
function positiveSum(arr) {
	let emptyArray = arr
	let sumArray = 0
	for (const numberOfArray of emptyArray) {
		if (numberOfArray >= 0) {
			sumArray += numberOfArray
		} else {
			continue
		}
	}
	return sumArray
}

let arraySum = positiveSum([1, 2, 3, 4])

// finding min number in array
function findSmallestInt(arr) {
	let smallestInt = Math.min(...arr)
	return smallestInt
}

let smallestInt = findSmallestInt([4, 10, 15, 6, 1])
