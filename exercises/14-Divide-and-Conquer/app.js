let list_of_numbers = [4, 80, 85, 59, 37,25, 5, 64, 66,	81,20, 64, 41, 22, 76,76, 55, 96, 2, 68];

// your code here
function mergeTwoList(arreglo){
    let listadenum = [];
    let odd = [];
    let even = [];
    for (var item in list_of_numbers){
        if (item%2==0){
            even.push(item);
        }
        else{
            odd.push(item);
        }
        }
    }


console.log(mergeTwoList(list_of_numbers))
