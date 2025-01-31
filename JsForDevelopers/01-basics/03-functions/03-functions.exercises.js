// functions

/**
 * 1. Given a two-dimensional array of integers, return the flattened version of the array with all the integers sorted (ascending) order.
 *
 * Example:
 * Given [[3,2,1],[4,5,6],[],[9,7,8]], your function should return [1,2,3,4,5,6,7,8,9]
 *
 * Hint you can use Array.prototype.reduce and Array.prototype.sort for this
 * Try to solve this task with arrow functions
 */
function sortFlat(data) {
  return data.reduce((acc, val) => acc.concat(val), []).sort();
}

console.log(sortFlat([[3,2,1],[4,5,6],[],[9,7,8]]));

/**
 * 2. You will be given an array of objects representing developers.
 * Your task is to return an array with objects where each object has a property greeting
 * with the following string value:
 *
 * Hi <first name>, what do you like the most about <language>?
 *
 *
 *
 * const devs = [
 *   {firstName: 'Peter', language: 'JavaScript', greeting: 'Hi Peter, whatdo you like the most about JavaScript'},
 *   {firstName: 'Paul', language: 'JavaScript', greeting: 'Hi Paul, whatdo you like the most about TypeScript'},
 *   {firstName: 'Mary', language: 'JavaScript', greeting: 'Hi Mary, whatdo you like the most about WebAssembly'},
 * ]
 */

const devs = [
  { firstName: 'Peter', language: 'JavaScript' },
  { firstName: 'Paul', language: 'TypeScript' },
  { firstName: 'Mary', language: 'WebAssembly' },
];

function greet(data) {
  return data.map(
    d => {
      return {
        ...d,
        greeting: `Hi ${d.firstName}, what do you like the most about ${d.language}`
      }
    });
}

console.log(greet(devs));

/*returns [
 *   {firstName: 'Peter', language: 'JavaScript', greeting: 'Hi Peter, whatdo you like the most about JavaScript'},
 *   {firstName: 'Paul', language: 'JavaScript', greeting: 'Hi Paul, whatdo you like the most about TypeScript'‚ },
 *   {firstName: 'Mary', language: 'JavaScript', greeting: 'Hi Mary, whatdo you like the most about WebAssembly'},
 * ]
 */

/**
 * 3. Write a function that accepts an array and a callback function. The function returns two arrays. The first array
 * contains all values the callback function returns the value true. The second array contains all the values the callback
 * function returns false.
 */

function isEven (x) {return x % 2 === 0}
function split(data, callback) {
  const first = [];
  const second = [];
  for(let i = 0; i < data.length; i++) {
    if (callback(data[i])) {
      first.push(data[i])
    } else {
      second.push(data[i])
    }
  }
  return [first, second];
}
console.log(split([1, 2, 3, 4], isEven)); // [[2,4],[1,3]]
