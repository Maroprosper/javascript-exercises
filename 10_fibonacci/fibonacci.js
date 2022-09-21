const fibonacci = function(number) {
    const array = [1,1];
    if(parseInt(number) < 0 || isNaN(parseInt(number))){
        return 'OOPS';
    }
    else if(typeof parseInt(number) === 'number'){
        for(let i = 2; i < number; i++){
            array.push(parseInt(array[i-2] + array[i-1]));
        };
        return array[number - 1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
