const sumAll = function(min, max) {
    let result = 0;
    if((typeof min !== "number") || (min < 1 || max < 1) || (typeof max !== "number")){
        result = 'ERROR';
}
    else if(min > max){
        for (let i = min; i >= max; i--) {
            result += i;
    }
}
    else if(min < max){
        for (let i = min; i <= max; i++) {
            result += i;
    }
}
return result;
};

// Do not edit below this line
module.exports = sumAll;
