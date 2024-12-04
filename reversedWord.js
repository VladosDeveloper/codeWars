function solution(str) {
	let reversedText = str
	reversedText = reversedText.split('').reverse().join('')
	return reversedText
}

let text = solution('world')
console.log(text)
