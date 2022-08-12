const repeatString = function(string, number) {
         let result = '';
         if(number < 0){
            result = "ERROR";
         }
        else{
         for(let i = number; i > 0; i--){
            result += string;
            }
         }
         return result;
};
   repeatString( "hey", -2);
// Do not edit below this line
module.exports = repeatString;
