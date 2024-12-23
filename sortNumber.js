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
