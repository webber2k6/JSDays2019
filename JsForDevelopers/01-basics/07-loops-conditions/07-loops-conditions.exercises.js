// loops

/**
 * 1. Using a for loop, log out the reading status in the format 'author - [read/not read]' for
 * each of the items in the 'library' array. The first expected output is 'The Road Ahead - read':
 */
const library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    read: true
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    read: true
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    read: false
  }
];
for (let i = 0; i < library.length; i++) {
  console.log(`${library[i].author} - ${library[i].read ? '' : 'not '}read`);
}

/**
 * 2. Do the same as in exercise 1, but using the .forEach method.
 */
library.forEach(entry => console.log(`${entry.author} - ${entry.read ? '' : 'not '}read`));

/**
 * 3. Using a for..in loop, log out the properties of the following object. The expected output
 * is the following log lines:
 * name - Carlos
 * age - 23
 * birthdate - 1970-10-5
 * favoriteColor - blue
 */
const objForIn = { name: 'Carlos', age: 23, birthdate: '1970-10-5', favoriteColor: 'blue' };
for(let prop in objForIn) {
  console.log(`${prop} - ${objForIn[prop]}`)
}

/**
 * 4. Using the 'numbers' array, create a new 'doubledNumbers' array where each of the entries
 * is double the corresponding 'numbers' entry. If successful, '4. [2,4,6]' will be printed out:
 */
const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(n => 2*n);
console.log(`4. ${JSON.stringify(doubledNumbers)}`);


/**
 * 5. Filter the 'mixedValues' and create a new 'stringValues' array containing only the entries
 * of mixedValues that are strings. If successful, '5. ["a","b","c"]' will be printed out:
 */
const mixedValues = ['a', 1, 'b', 2, 'c', 3];
const stringValues = mixedValues.filter(v => typeof v === 'string');
console.log(`5. ${JSON.stringify(stringValues)}`);


/**
 * 6. Using the .reduce function, compute the sum of all items in the 'sumNumbers' array and save
 * it into a variable called 'sum'. If successful, '6. 21' will be printed out:
 */
const sumNumbers = [1, 2, 3, 4, 5, 6];
const sum = sumNumbers.reduce((act, cur) => act + cur, 0);
console.log(`6. ${sum}`);
