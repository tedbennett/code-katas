// https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

// brute force approach to iterate through every num in the range and check if it
// fulfills condition that the sum of its digits raised to consecutive powers i.e 1, 2...
// is equal to the number itself.

const sumDigPow = (low, high) => {
  const values = [];
  for (let i = low; i <= high; i += 1) {
    const digits = String(i).split('').map((el) => Number(el));
    console.log(digits);
    const total = digits.reduce((sum, el, power) => {
      console.log(sum, el, power, (sum + (el ** (power + 1))));
      return Number(sum) + Number(el ** (power + 1));
    });
    if (Number(total) === i) {
      values.push(Number(total));
    }
  }
  return values;
};

console.log(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
console.log(sumDigPow(10, 100), [89]);
console.log(sumDigPow(90, 100), []);
console.log(sumDigPow(90, 150), [135]);
console.log(sumDigPow(50, 150), [89, 135]);
console.log(sumDigPow(10, 150), [89, 135]);
