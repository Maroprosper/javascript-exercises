const reverseString = function(string) {
     const array = string.split('');
     let newArray = array.reverse();
     let result = newArray.join('');
     return result;
};

// Do not edit below this line
module.exports = reverseString;
