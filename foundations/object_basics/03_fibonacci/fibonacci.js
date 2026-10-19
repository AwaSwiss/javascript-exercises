const fibonacci = function(n, isInitial=true) {
    if(!Number.isInteger(n)) return "OOPS";
    if(n<=0 && isInitial == true) return "OOPS";
    if(n<=0 && isInitial == false) return 0;
    if (n==1) return 1;
    return fibonacci(n-2, false) + fibonacci(n-1, false);
};

// Do not edit below this line
module.exports = fibonacci;
