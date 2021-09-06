var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
var typeOfElement = [];
for (var item in mix){
    let tipo = typeof(mix[item]);
    typeOfElement.push(tipo);
   
}


console.log(typeOfElement);