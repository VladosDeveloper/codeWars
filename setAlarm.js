function setAlarm(employed, vacation) {
	//we should set alarm only when employed
	return employed && vacation === false ? true : false
}
