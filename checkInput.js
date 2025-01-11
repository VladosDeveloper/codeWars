function check(a, x) {
	let counter = 0
	for (const value of a) {
		if (value === x) {
			counter++
		}
	}
	return counter > 0 ? true : false
}
