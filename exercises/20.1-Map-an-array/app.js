var arrayOfCelsiusValues = [-2,34,56,-10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
	value =  (value * 9/5) + 32
	//add your code here and return the new value
	return value;
});

console.log(arrayOfFahrenheitValues);

