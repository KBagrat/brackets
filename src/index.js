module.exports = function check(str, bracketsConfig) {
	let brackets = bracketsConfig.map(el => el[0] + el[1]); // [ '12', '34', '56', '77', '88' ]
	let result = [...str].join(''); //'111115611111111222288888822225577877778775555666677777777776622222'

	for (let i = 0; i < brackets.length; i++) {
		while (result.includes(brackets[i])) {
			let index = result.indexOf(brackets[i]);
			result = result.slice(0, index) + result.slice(index + 2);
		}
	}
	for (let i = 0; i < brackets.length; i++) {
		while (result.includes(brackets[i])) {
			let index = result.indexOf(brackets[i]);
			result = result.slice(0, index) + result.slice(index + 2);
		}
	}
	for (let i = 0; i < brackets.length; i++) {
		while (result.includes(brackets[i])) {
			let index = result.indexOf(brackets[i]);
			result = result.slice(0, index) + result.slice(index + 2);
		}
	}
	for (let i = 0; i < brackets.length; i++) {
		while (result.includes(brackets[i])) {
			let index = result.indexOf(brackets[i]);
			result = result.slice(0, index) + result.slice(index + 2);
		}
	}
	for (let i = 0; i < brackets.length; i++) {
		while (result.includes(brackets[i])) {
			let index = result.indexOf(brackets[i]);
			result = result.slice(0, index) + result.slice(index + 2);
		}
	}

	return !(result.length);
};