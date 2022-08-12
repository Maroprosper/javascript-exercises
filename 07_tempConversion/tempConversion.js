const ftoc = function(degree) {
     let result = Math.round(((degree -32) * (5/9)) * 10) / 10;
     return result;
};

const ctof = function(degree) {
     let result = Math.round(((degree * (9/5)) + 32) * 10) / 10;
     return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
