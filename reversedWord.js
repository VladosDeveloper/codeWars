function solution(str) {
	let reversedText = str
	reversedText = reversedText.split('').reverse().join('')
	return reversedText
}

let text = solution('world')

function numberToString(num) {
	let covertedString = String(num)
	return covertedString
}

let resolve = numberToString(1234)
