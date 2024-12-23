var number = function (busStops) {
	let countOfPeople = 0
	for (const item of busStops) {
		countOfPeople += item.reduce((acc, cur) => cur - acc, 0)
	}
	return -countOfPeople
}
