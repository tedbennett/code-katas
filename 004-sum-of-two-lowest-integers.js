// https://www.codewars.com/kata/558fc85d8fd1938afb000014

// Find the sum of the two smallest numbers in an array of positive integers
//
// Simplest method - sort and use first two elements
//
// First brute force method:
//   - Iterate over all numbers, caching the smallest number and comparing to find
//     the total smallest number in the array
//   - Iterate again comparing with the smallest number to find the second smallest number

// This requires two iterations
// Instead iterate once, but if the number is not smaller than the current smallest number,
// check if it could be the current second smallest.
// The issue here is that since the second smallest check is in an else,
// the second smallest would not ever be assigned to the current smallest

// e.g [4,2] -> 4 becomes current smallest, second smallest remains Infinity. Then 2 becomes
// the new smallest, so second remains Infinity.

// Final method:
//  - Iterate over all numbers, check against cached smallest value
//  - Before updating to new smallest, check if old smallest is smaller than the current
//    second smallest, update if necessary.
//  - Update second smallest with else if necessary.
//
//  Min will always be smaller than the second min so if check unnecessary

function sumTwoSmallestNumbers(numbers) {
  let smallestNum = Infinity;
  let secondSmallestNum = Infinity;

  numbers.forEach((element) => {
    if (element < smallestNum) {
      secondSmallestNum = smallestNum;
      smallestNum = element;
    } else if (element < secondSmallestNum) {
      secondSmallestNum = element;
    }
  });
  return smallestNum + secondSmallestNum;
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13);
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6);
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10);
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24);
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16);
