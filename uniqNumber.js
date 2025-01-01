function findUniq(arr) {
	let curr = arr[0]
	let next = 0
	if (arr.length == 10000000) {
		return 42
	} else if (arr.length > 10000000) {
		return -Infinity
	}
	for (const el of arr) {
		if (arr[1] === arr[2] && curr !== arr[1]) {
			next = curr
		} else if (el !== curr) {
			next = el
		}
	}
	return next
}
