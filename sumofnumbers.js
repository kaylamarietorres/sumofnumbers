// Using a for-loop
function sumFor(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Using a while-loop
function sumWhile(arr) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

// Using recursion
function sumRecursion(arr, index = 0) {
  if (index === arr.length) {
    return 0;
  }
  return arr[index] + sumRecursion(arr, index + 1);
}
const _ = require('underscore');

function sumTheSimpleWay(arr) {
  return _.reduce(arr, function (memo, num) {
    return memo + num;
  }, 0);
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];

console.log('Using for-loop:', sumFor(numbers));
console.log('Using while-loop:', sumWhile(numbers));
console.log('Using recursion:', sumRecursion(numbers));
console.log('Using underscore.js:', sumTheSimpleWay(numbers));
