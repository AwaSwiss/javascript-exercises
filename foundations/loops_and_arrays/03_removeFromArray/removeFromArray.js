const removeFromArray = function(arr, ...removeElements) {
    for(let i = 0; i < removeElements.length; ++i) {
        if (!arr.includes(removeElements[i])) {
            continue;
        }
        while(arr.includes(removeElements[i])) {
            arr.splice(arr.indexOf(removeElements[i]), 1)
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
