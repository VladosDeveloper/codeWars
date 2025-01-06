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
