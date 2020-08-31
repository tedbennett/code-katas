export const digitalRoot = (n: number): number => {
    // your code here
    let digitArray = String(n).split('').map((digit) => { return Number(digit); });
    let digitSum = Number(digitArray.reduce((sum, digit) => {
        return sum + Number(digit);
    }));
    if (digitSum >= 10) {
        return digitalRoot(digitSum);
    }
    return digitSum;
};

console.log(digitalRoot(16), 7);
console.log(digitalRoot(456), 6);