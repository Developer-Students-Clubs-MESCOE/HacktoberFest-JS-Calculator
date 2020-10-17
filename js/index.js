const addToText = (value) => {
	document.calc.txt.value += value
}

const clear = () => {
	document.calc.txt.value = ''
}

const equals = () => {
	document.calc.txt.value = eval(document.calc.txt.value)
}

document.querySelectorAll('.num').forEach(e => {
	e.addEventListener('click', () => {
		addToText(e.textContent)
	})
})

document.querySelectorAll('.clear').forEach(e => {
	e.addEventListener('click', () => {
		clear()
	})
})