const sumAll = function(number1, number2) {

    let sum = 0;

    if(!Number.isInteger(number1) || !Number.isInteger(number2)){
        return "ERROR";
    }
    else if(number1 < 0 || number2 < 0){
        return "ERROR";
    }
    else {
        if(number1 > number2) {
            let x = number1;
            number1 = number2;
            number2 = x;
        }
        for (let index = 0; index < number2 - number1 + 1; index++) {
            
            sum = sum + number1 + index;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
