const removeFromArray = function(array, ...param){
         for(let i = 0; i < param.length; i++){
         let index = array.indexOf(param[i]);
         if(array.includes(param[i])){
         array.splice(index, 1);
         }
         }
         return array;
};
// Do not edit below this line
module.exports = removeFromArray;
