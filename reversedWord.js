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

//square number
function squareSum(numbers) {
	let squareNumber = 0
	for (const number of numbers) {
		squareNumber += Math.pow(number, 2)
	}
	return squareNumber
}

//finding vowels in string
function getCount(str) {
	let counterVowers = 0
	let strInWord = str.split('')
	let vowelnArray = ['a', 'e', 'i', 'o', 'u']

	for (const vowel of strInWord) {
		for (const letter of vowelnArray) {
			if (vowel === letter) {
				counterVowers++
			} else {
				continue
			}
		}
	}
	return counterVowers
}

//basic mathematics operations
function basicOp(operation, value1, value2) {
	switch (operation) {
		case '+':
			return value1 + value2
			break
		case '-':
			return value1 - value2
			break
		case '*':
			return value1 * value2
			break
		case '/':
			return value1 / value2
			break
	}
	return 0
}

//searching friend
function friend(friends) {
	let output = []
	for (const name of friends) {
		if (name.length === 4) {
			output.push(name)
		}
	}
	return output
}

//pos and neg numbes in array
function countPositivesSumNegatives(input) {
	let posNumber = 0
	let negNumber = 0
	let returnedArray = []
	if (input !== null && input.length !== 0) {
		for (const posArrayNumber of input) {
			if (posArrayNumber > 0) {
				posNumber++
			} else {
				negNumber += posArrayNumber
			}
		}
		const count = returnedArray.push(posNumber, negNumber)
		return returnedArray
	} else {
		return returnedArray
	}
}

//reverse every word in string
function reverseWords(str) {
	return str
		.split(' ')
		.map(word => {
			return word.split('').reverse().join('')
		})
		.join(' ')
}
