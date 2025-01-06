function countBy(x, n) {
	let z = []
	const nonChanged = x
	do {
		z.push(x)
		x += nonChanged
		n--
	} while (n !== 0)

	return z
}
