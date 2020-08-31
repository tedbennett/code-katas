export function findMissingLetter(array: string[]): string {
    let alphabet = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
        "w", "x", "y", "z"
    ];

    let missingLetter = "";
    let isUpperCase = array[0].toUpperCase() === array[0];
    let found = false;
    let index = 0;
    while (!found) {
        console.log(alphabet[index], array[0]);
        if ((isUpperCase ? alphabet[index].toUpperCase() : alphabet[index]) === array[0]) {
            found = true;
        }
        else if (index === alphabet.length - 1) {
            return "";
        }
        else {
            index++;
        }
    }

    array.some((letter) => {
        if (letter !== (isUpperCase ? alphabet[index].toUpperCase() : alphabet[index])) {
            missingLetter = isUpperCase ? alphabet[index].toUpperCase() : alphabet[index];
            return true;
        }
        index++;
        return false;
    });
    return missingLetter;
}


// console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
console.log(findMissingLetter(["f", "g", "h", "i", "j", "k", "m"]), 'l');
// console.log(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');

