const numbers = [2, 4, 6, 8, 10];

function addTwo(number) {
  return number + 2;
}

const numbersPlusTwo = numbers.map(addTwo);

console.log(numbersPlusTwo);

// result is [ 4, 6, 8, 10, 12 ]
