var testNum= 600851475143;

var primeCalculator= function(){
	var calcdPrime = 1;

	for(var num= 1; num<100000;num++){
		if(testNum % num ==0){
			if(isPrime(num)){
				calcdPrime=num;

			}

			
		}


	}
	return calcdPrime;
};

var isPrime= function(numP){
	for(var i=2;i< numP;i++){
		if(numP % i ==0){
			return false;
		}
	}
	return true;
};
			
console.log("This might be right: "+primeCalculator());