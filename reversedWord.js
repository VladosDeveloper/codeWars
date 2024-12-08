
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

//rps
const rps = (p1, p2) => {
	if (p1 === 'scissors' && p2 === 'paper') {
		return 'Player 1 won!'
	} else if (p1 === 'paper' && p2 === 'rock') {
		return 'Player 1 won!'
	} else if (p1 === 'rock' && p2 === 'scissors') {
		return 'Player 1 won!'
	} else if (p1 === p2) {
		return 'Draw!'
	} else {
		return 'Player 2 won!'
	}
}

//Square area and rectangle perimetr
const areaOrPerimeter = function (l, w) {
	let area
	if (l === w) {
		area = l * w
		return area
	} else {
		area = 2 * (l + w)
		return area
	}
}
 
// boolToWord
function boolToWord(bool) {
	return bool == true ? 'Yes' : 'No'
}

// are you better than your class?
function betterThanAverage(classPoints, yourPoints) {
	const initialValue = 0
	const sumClassPoints = classPoints.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		initialValue
	)

	const avaregeClassPoints = sumClassPoints / classPoints.length
	if (avaregeClassPoints > yourPoints) {
		return false
	} else {
		return true
	}
}

//finding a needle
function findNeedle(haystack) {
	for (let i = 0; i < haystack.length; i++) {
		if (haystack[i] === 'needle') {
			return 'found the needle at position ' + i
		}
	}
}