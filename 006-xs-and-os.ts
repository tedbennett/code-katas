// https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str: string): boolean {
    //code here
    const lowerStr = str.toLowerCase();
    let occurences = {};
    lowerStr.split("").forEach((element) => {
        occurences[element] = occurences[element] ? occurences[element] + 1 : 1;
    });
    return occurences['x'] === occurences['o'];
}

console.log(XO('xo'), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);