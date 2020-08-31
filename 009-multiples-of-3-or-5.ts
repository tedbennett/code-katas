// https://www.codewars.com/kata/514b92a657cdc65150000006

export function solution(number) {
    let sum = 0;
    for (let i = 0; i < number; i += 3) {
        // console.log(i)
        sum += i;
    }
    for (let i = 0; i < number; i += 5) {
        if (!(i % 3 === 0)) {
            sum += i;
            // console.log(i);
        }
    }
    for (let i = 0; i < number; i += 1) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
            console.log(i);
            // sum += i;
        }
    }
    return sum;
}

console.log(solution(10), 23);
console.log(solution(63), 78);
// console.log(solution(4500), 5175);