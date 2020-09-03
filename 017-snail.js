const getIndices = (length, offset, indices) => {
  for (let i = 0; i < length - 1; i += 1) {
    indices.push([offset, i + offset]);
  }
  for (let i = 0; i < length - 1; i += 1) {
    indices.push([i + offset, length - 1 + offset]);
  }
  for (let i = length - 1; i > 0; i -= 1) {
    indices.push([length - 1 + offset, i + offset]);
  }
  for (let i = length - 1; i > 0; i -= 1) {
    indices.push([i + offset, offset]);
  }
  console.log(indices);
  if (length >= 2) {
    return getIndices(length - 2, offset + 1, indices);
  }
  if (length === 1) {
    indices.push([offset, offset]);
  }
  return indices;
};

const snail = (array) => {
  const { length } = array;
  if (array[0].length === 0) {
    return [];
  }
  const indices = getIndices(length, 0, []);
  return indices.map((index) => Number(array[index[0]][index[1]]));
};

/* eslint max-len: 0 */
console.log(snail([[]]), []);
console.log(snail([[1]]), [1]);
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
