// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

const validParentheses = (parens) => {
  // TODO
  const stack = [];
  parens.split('').forEach((el) => {
    if (stack.length > 0) {
      if (stack[stack.length - 1] === '(' && el === ')') {
        stack.pop();
      } else {
        stack.push(el);
      }
    } else {
      stack.push(el);
    }
  });
  return stack.length === 0;
};

console.log(validParentheses('()'), true);
