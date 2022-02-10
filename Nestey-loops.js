"use strict"


let bobsFollowers = ['wassim', 'ali', 'ahmad', 'abd'];
let tinasFollowers = ['wassim', 'abd', 'read'];
let mutualFollowers  = [];

for( let i = 0; i < bobsFollowers.length; i++){
  for( let b = 0; b < tinasFollowers.length; b++){
    if(bobsFollowers[i] === tinasFollowers[b]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
console.log(bobsFollowers);
console.log(tinasFollowers);
console.log(mutualFollowers);


//result of mutualFollowers is ' wassim, abd '
//this why used to check the repeated strings or numbers
//in arrays and print it out in the empty array. 