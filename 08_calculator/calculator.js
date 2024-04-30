const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
