// https://www.codewars.com/kata/513e08acc600c94f01000001/javascript

function rgb(r, g, b) {
  return [r, g, b]
    .map((val) => Math.max(Math.min(val, 255), 0).toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase();
}

console.log(rgb(0, 0, 0), '000000');
console.log(rgb(0, 0, -20), '000000');
console.log(rgb(300, 255, 255), 'FFFFFF');
console.log(rgb(173, 255, 47), 'ADFF2F');
