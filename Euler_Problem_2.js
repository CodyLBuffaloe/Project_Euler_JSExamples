var figure= function(num){ // creates our variable function that will take an argument
	var totalAdd = 0; // creates a variable to hold our end result number
	var fibb=[]; //creates empty array
	fibb[0]=0; //populates space 1 with 0. 
	fibb[1]=1; //populates space 2 with 1- the first fibonacci number
	fibb[2]=0; // another zero b/c we need to add this together. These three numbers will all be added together. Apparently, you only need to keep track of three Fib numbers at any time, b/c it's inevitable that the third one will be even.

	while(fibb[2] <= num){ //establishes a while loop to make sure our third number stays under 4 mil
		fibb[2]= fibb[0]+fibb[1]; //as long as this loops, the value of fibb[2] will equal the first 2 numbers added together.
		if(fibb[2]%2===0 && fibb[2]<= num){ // if fibb[2] is even AND is less than 4 mill
			totalAdd+=fibb[2]; //add the value of fibb[2] to our total sum
		}
		fibb[0] = fibb[1]; //we do our fibonacci calc up above our if statement, then set the first value to the numerical value of fibb[1]
		fibb[1] = fibb[2]; //and we set fibb[1] to the next fibonacci number so we can loop through again
	}
	return totalAdd;
}

console.log("The sum of all the even Fibonacci numbers up to 4 million is: "+ figure(4000000));