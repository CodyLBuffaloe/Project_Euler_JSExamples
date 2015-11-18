var sumTotal = function(input){ //creates our function that will take a number provided when we call it.
	var sum = 0; //A variable to hold our calculated sum.
	for(var i = 1; i < input; i++){ //creates our for loop that quits when it equals the number provided when called.
		if(i%3 === 0){ //checks to see if the number is divisible evenly by 3
		 sum += i; //If so, then add that number to our sum.
		}
		else if(i % 5 === 0){ //checks to see if the number is divisible by 5.
		sum += i; //if so, then add that number to our sum as well. I am unsure if this means numbers like 15 get added twice.
		}
	
	}
	return sum; // After all of our calculations get looped, this returns the end value.
};
var endSum = sumTotal(1000); // calling our function with the limit provided
console.log("The total of all numbers divisible by 3 or 5 is: " + endSum); 