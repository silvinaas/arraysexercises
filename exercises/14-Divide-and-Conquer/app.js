let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList(principalArray){
    let listadenum = [];
    let even = [];
    let odd = [];
    for (var item in principalArray){
        if (item%2==0){
            even.push(item);
        }
        else{
            odd.push(item);
        }
        }
odd.forEach(function(item){
    listadenum.push(item)
});

even.forEach(function(item){
    listadenum.push(item)
});

    return listadenum;
    }


console.log(mergeTwoList(list_of_numbers))
