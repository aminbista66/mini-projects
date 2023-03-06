function encode(number){
	const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
	
	let str = '';
	decimal.map(function (value, index) { 
		if(number >= value){ 
			const q  = Math.floor(number / value);
			str += roman[index].repeat(q);
			number -= q * value
		}
	})
	return str;
}

result = encode(1000);
console.log(result)
