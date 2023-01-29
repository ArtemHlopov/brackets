module.exports = function check(str, bracketsConfig) {
  // your solution
  let pairs = Object.fromEntries(bracketsConfig);
  let stack = [];

  if (str.length % 2 !== 0) {
    return false;
  } else {
    for (let i = 0; i < str.length; i++) {
      if (
        !Object.keys(pairs).includes(str[i]) &&
        !Object.values(pairs).includes(str[i])
      ) {
        return false;
      }
      if (Object.keys(pairs).includes(str[i])) {
        if (pairs[`${str[i]}`] == undefined) {
          return false;
        } else {
          stack.push(str[i]);
        }
      }
      if (
        Object.values(pairs).includes(str[i]) &&
        str[i] === pairs[`${stack[stack.length - 1]}`]
      ) {
        if (str[i] === pairs[`${str[i]}`]) {
          if (str[i] === stack[stack.length - 2]) {
            stack.pop();
            stack.pop();
          } else {
            continue;
          }
        } else {
          stack.pop();
        }
      }
    }
    console.log(stack);
  }
  return stack.length === 0;
};
