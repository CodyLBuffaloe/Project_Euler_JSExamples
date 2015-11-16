var sumTotal = function(input){
	var sum = 0;
	for(var i = 1; i < input; i++){
		if(i%3 === 0){
		 sum += i;
		}
		else if(i % 5 === 0){
		sum += i;
		}
	
	}
	return sum;
};
var endSum = sumTotal(1000);
console.log("The total of all numbers divisible by 3 or 5 is: " + endSum);