let myArray = [ 1, 0, 0, 0, 1, 0, 0, 0, 1, 1 ];

const ZerosToYahoos = (arr) => {
    let return_array = [];
    arr.forEach((item,index) => {
        if (item == 0){
            return_array.push("Yahoo")
        }
        else{
            return_array.push(1);
        }
            // magic goes inside these brackets
    });
    return return_array;
};

console.log(ZerosToYahoos(myArray));