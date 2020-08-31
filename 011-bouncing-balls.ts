// https://www.codewars.com/kata/5544c7a5cb454edb3c000047

export function bouncingBall(h: number, bounce: number, window: number): number {

    if ((h <= 0) || (bounce <= 0) || (bounce >= 1) || (window >= h)) {
        return -1;
    }
    let bounces = Math.log(window / h) / Math.log(bounce);
    if (bounces % 1 === 0) {
        bounces -= 1;
    }
    return (Math.floor(bounces) * 2) + 1;
}

console.log(bouncingBall(3.0, 0.66, 1.5), 3);
console.log(bouncingBall(30.0, 0.66, 1.5), 15);
console.log(bouncingBall(30, 0.75, 1.5), 21);
console.log(bouncingBall(30, 0.4, 10), 3);
console.log(bouncingBall(2, 0.5, 1), 1);
