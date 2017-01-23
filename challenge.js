function digitMath(num1, num2){
	var num1ToString = num1.toString().split("");
	var num2ToString = num2.toString().split("");
	num1ToString = num1ToString.map(function(element){
		return parseInt(element)+ 1;
	})
	num2ToString = num2ToString.map(function(element){
		return parseInt(element)+ 1;
	})

	var finalNum1 = num1ToString.reduce(function(a,b){
		return a + b;
	})
	var finalNum2 = num2ToString.reduce(function(a,b){
		return a + b;
	})

	return finalNum1 + finalNum2;

}

module.exports = {
	digitMath
}