const repeatString = function(phrase, repeat) {
    let output = phrase;
    
    
    if (repeat == 0) {
        output = "";
    }
    else if(repeat > -1) {
        for (let index = 0; index < repeat - 1; index++) {
            output = output + phrase;
        }
    }
    else {
        output = "ERROR";
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
