var figure= function(num){
	var totalAdd = 0;
	var fibb=[];
	fibb[0]=0;
	fibb[1]=1;
	fibb[2]=0;

	while(fibb[2] <= num){
		fibb[2]= fibb[0]+fibb[1];
		if(fibb[2]%2===0 && fibb[2]<= num){
			totalAdd+=fibb[2];
		}
		fibb[0] = fibb[1];
		fibb[1] = fibb[2];
	}
	return totalAdd;
}

console.log("The sum of all the even Fibonacci numbers up to 4 million is: "+ figure(4000000));