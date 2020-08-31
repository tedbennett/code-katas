// n numbers of intervals
function lenCurve(n) {
  // your code
  const minX = 0;
  const maxX = 1;
  const h = (maxX - minX) / n;
  const fx = (x) => x * x;

  let length = 0;
  let prevX = fx(minX);

  for (let i = 0; i < n; i++) {
    const nextX = fx((i + 1) * h);
    length += Math.sqrt(h ** 2 + (nextX - prevX) ** 2);
    prevX = nextX;
  }
  return length;
}

console.log(lenCurve(1), 1.414213562);
console.log(lenCurve(10), 1.478197397);
