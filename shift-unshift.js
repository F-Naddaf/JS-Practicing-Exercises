"use strict"


const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.shift();
console.log(chores);

// result 'do laundry', 'take out trash', 'cook dinner', 'mop floor'
// shift is removing the first element from the array.



const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.unshift('mayo');
console.log(chores);

// result 'mayo', 'wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'
// unshift is adding an element to beginning of the array.