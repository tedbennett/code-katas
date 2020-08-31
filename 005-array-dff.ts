//https://www.codewars.com/kata/523f5d21c841566fde000009

// Implement a difference function, which subtracts one list from another and returns the result.
// 
// Brute force is to iterate over both arrays and check if each element appears in the other
// (and is not already in the list of differences)
// 
// First attempt:
//  - Concatenate both lists
//  - Create an object of element keys and their occurences as values
//  - Iterate through this object and discard any with occurence > 2

const bruteArrayDiff = (a: number[], b: number[]): number[] => {
    let diff: number[] = [];

    a.forEach((element) => {
        if (!b.includes(element) && !diff.includes(element)) {
            diff.push(element);
        }
    });

    b.forEach((element) => {
        if (!a.includes(element) && !diff.includes(element)) {
            diff.push(element);
        }
    });
    return diff;
};

interface Dictionary {
    [key: number]: number;
}

const firstAttemptArrayDiff = (a: number[], b: number[]): number[] => {
    let combined = a.concat(b);
    let occurences: Dictionary = {};
    combined.forEach((element) => {
        occurences[element] = occurences[element] ? occurences[element] + 1 : 1;
    });
    let diff: number[] = [];
    Object.keys(occurences).forEach((key) => {
        if (occurences[key] === 1) {

            diff.push(Number(key));
        }
    });
    return diff;
};

const arrayDiff = (a: number[], b: number[]): number[] => {
    return firstAttemptArrayDiff(a, b);
};

const a = [1, 2, 3];
const b = [2, 3, 4];


console.log(arrayDiff(a, b));
