function XO(str) {
	let countO = 0
	let countX = 0
	str
		.toLowerCase()
		.split('')
		.map(x => {
			if (x === 'x') {
				countX++
			} else if (x === 'o') {
				countO++
			}
		})
	return countO === countX ? true : false
}
