"use strict"

const drinkTypes = ['cola', 'lemonade', 'water'];


for(let i = 0; i < 5; i++){
    console.log(drinkTypes[Math.floor(Math.random()*3)]);
}

// result 'cola, water, cola, lemonade, water' Note: it will keep change every time we refresh the browser.
// It selecting the 3 elements randomly 5 times according to the loop.