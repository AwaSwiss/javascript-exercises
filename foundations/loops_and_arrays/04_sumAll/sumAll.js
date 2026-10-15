const sumAll = function(start, end) {
    if (start < 0 || end < 0) return "ERROR";
    if (start % 1 != 0 || end % 1 != 0 ||
    start !== Number(start) || end !== Number(end)) return "ERROR";

    
    if (start > end) {
        let temp = end;
        end = start;
        start = temp;
    }
    let sum = 0;
    for(let i = start; i < end + 1; ++i) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
