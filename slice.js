"use strict"

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

console.log(groceryList.slice(1, 4));
console.log(groceryList);

// result is 'bananas', 'coffee beans', 'brown rice'
// slice (1, 4)... 1 is the start ('orange juice' is (0), 'bananas' is (1), 'coffee beans' is (2), 'brown rice' is (3) .....)
// slice (1, 4)... 4 is the end ('orange juice' is (1), 'bananas' is (2), 'coffee beans' is (3), 'brown rice' is (4) .....)