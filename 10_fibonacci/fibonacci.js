const fibonacci = function(num) {
    num = Number(num);
    let fib1 = 1;
    let fib2 = 1;
    let sumFib;
    if(num < 0){
        return "OOPS";
    }
    else if(num == 0){
        return 0;
    }
    else if(num < 3){
        return 1;
    }
    else {
        for (let index = 0; index < num - 2; index++) {
            sumFib = fib1 + fib2;
            fib1 = fib2;
            fib2 = sumFib;          
        }
        return sumFib;
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
