const findTheOldest = function(people) {
     return people.reduce((a,b) => {
        if(a.yearOfDeath == null){ 
            a.yearOfDeath = new Date().getUTCFullYear();             
        }
        if(b.yearOfDeath == null){
            b.yearOfDeath = new Date().getUTCFullYear();
        }
        if((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)){
            return a;
        }
        else{
            return b;
        }
     });        
};

// Do not edit below this line
module.exports = findTheOldest;
