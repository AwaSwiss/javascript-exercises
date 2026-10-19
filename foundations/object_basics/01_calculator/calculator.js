const add = function(x, y) {
  return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(arr) {
	return arr.reduce((total, number) => (total + number), 0);
};

const multiply = function(arr) {
  return arr.reduce((total, number) => (total*number), 1);
};

const power = function(base, exponent) {
	return base**exponent
};

const factorial = function(n) {
  if (n == 1 || n == 0) return 1;
  return n * factorial(n-1);
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
