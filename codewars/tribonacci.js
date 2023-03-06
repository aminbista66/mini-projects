function tribonacci(signature, n){
	if(n===0){
		return [];
	}
	var a=signature[0], b=signature[1], c=signature[2], d;
	series = [...signature]
	for(var i=3; i<=n; i++){
		d = a + b + c;
		series[i] = d;
		//[a, b, c] = [b, c, d];
		a=b; b=c; c=d;
	}
	return series
}

console.log(tribonacci([1, 1, 1], 5));
