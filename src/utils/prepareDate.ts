const prepareDate = (value: string | undefined) => {
	return (value) ? value.slice(0, 4) : 'Неизвестен';
}

export default prepareDate;