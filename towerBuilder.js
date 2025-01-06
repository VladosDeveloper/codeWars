function towerBuilder(nFloors) {
	let character = '*'
	let rows = []

	function padRow(rowNumber, rowCount) {
		return (
			' '.repeat(rowCount - rowNumber) +
			character.repeat(2 * rowNumber - 1) +
			' '.repeat(rowCount - rowNumber)
		)
	}

	for (let i = 1; i <= nFloors; i++) {
		rows.push(padRow(i, nFloors))
	}

	return rows
}
