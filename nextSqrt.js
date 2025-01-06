function findNextSquare(sq) {
	return Number.isInteger(Math.sqrt(sq))
		? (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1)
		: -1
}
