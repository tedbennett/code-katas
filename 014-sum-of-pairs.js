// https:// www.codewars.com/kata/54d81488b981293527000c8f/train/javascript

const sumPairs = (array, sum) => {
  // your code here
  const map = new Map();
  let pair;
  array.some((element, index) => {
    if (map.get(sum - element) !== undefined) {
      pair = [array[map.get(sum - element)], element];
      return true;
    }
    map.set(element, index);
    return false;
  });
  return pair;
};

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8), [1, 7]);
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6), [0, -6]);
console.log(sumPairs([20, -13, 40], -7), undefined);
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2), [1, 1]);
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10), [3, 7]);
console.log(sumPairs([4, -2, 3, 3, 4], 8), [4, 4]);
console.log(sumPairs([0, 2, 0], 0), [0, 0]);
console.log(sumPairs([5, 9, 13, -3], 10), [13, -3]);
