"use strict"


const numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];
console.log(target);


// result 6
// numberClusters[2][1]... number 2 is to select the array
//[1, 2] is (0), [3, 4] is (1), [5, 6] is (2).
//numberClusters[2][1]... number 1 is to select the elemnt inside the array
// [5, 6] 5 is (0), 6 is (1)