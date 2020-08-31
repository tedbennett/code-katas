const dirReduc = (array) => {
  let stack = [];
  array.forEach((element) => {
    if (stack.length !== 0) {
      if (element === "NORTH" && stack[stack.length - 1] === "SOUTH") {
        stack.pop();
        return;
      } else if (element === "SOUTH" && stack[stack.length - 1] === "NORTH") {
        stack.pop();
        return;
      } else if (element === "WEST" && stack[stack.length - 1] === "EAST") {
        stack.pop();
        return;
      } else if (element === "EAST" && stack[stack.length - 1] === "WEST") {
        stack.pop();
        return;
      }
      stack.push(element);
    } else {
      stack.push(element);
    }
  })
  return stack;
};

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]))
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]))
