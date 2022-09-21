const palindromes = function(string){
    const result = string.toLowerCase();
    const answer = result.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replace(/\s{1,}/g, '');
    const solution = answer.split('').reverse().join('');
    return (solution === answer)? true : false ; 
};
// Do not edit below this line
module.exports = palindromes;
