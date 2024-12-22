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
	return bool === true ? 'Yes' : 'No'
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

//pages and classmates
function paperwork(n, m) {
	if (n < 0 || m < 0) {
		return 0
	} else {
		return n * m
	}
}

//Even and Odd numbers
function evenOrOdd(number) {
	return number % 2 === 0 ? 'Even' : 'Odd'
}

//lowest and highest number in string
function highAndLow(numbers) {
	let nums = numbers.split(' ')
	return `${Math.max(...nums)} ${Math.min(...nums)}`
}

//time in mls
function past(h, m, s) {
	// 1 hour is 3600000mls
	// 1 min is 60000 mls
	// 1 sec is 1000 mlsstri
	return h * 3600000 + m * 60000 + s * 1000
}

//is he survive?
function hero(bullets, dragons) {
	if (bullets / 2 >= dragons) {
		return true
	} else {
		return false
	}
}
 
//make negative
function makeNegative(num) {
	return num <= 0 ? num : num - num * 2
}

//reverse number
function digitize(n) {
	let string = String(n)
	let stringArray = string.split('')
	let numberArray = []
	for (const num of stringArray) {
		numberArray.push(Number(num))
	}
	return n !== 0 ? numberArray.reverse() : [0]
}

//average of array 
function findAverage(array) {
	let averageArray = array.reduce((acc, cur) => acc + cur, 0)
	let result = averageArray / array.length
	return array.length !== 0 ? result : 0
}

//smallest word in string
function findShort(s) {
	let convertedString = s.split(' ')
	let emptyArray = []
	for (const str of convertedString) {
		emptyArray.push(str.length)
	}
	return Math.min(...emptyArray)
}

// sum array
function sum(numbers) {
	return numbers !== 0 ? numbers.reduce((acc, cur) => acc + cur, 0) : 0
}

//sort number
function descendingOrder(n) {
	let convertedNumbers = ''
	const compareFn = (a, b) => b - a
	let toString = String(n)
		.split('')
		.map(x => Number(x))
		.sort(compareFn)
	for (const el of toString) {
		convertedNumbers += el
	}
	return Number(convertedNumbers)
}

//series sum
function SeriesSum(n) {
	let initialValue = 1
	let number = 0
	if (n === 1) {
		return Number.parseFloat(n).toFixed(2)
	} else {
		for (let i = 1; i <= n; i++) {
			number += 1 / initialValue
			initialValue += 3
		}
		return Number.parseFloat(number).toFixed(2)
	}
}