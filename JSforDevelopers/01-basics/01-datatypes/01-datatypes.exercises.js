// data types

/**
 * 1. Given an array of values, find out how many falsy values are contained
 */
const falsyValues = ['a', 1, 0, '', [], {}, { a: 'b' }, false, { 1: false }];
const falsyCount = falsyValues.reduce((acc, val) => acc + (val ? 0 : 1), 0);
console.log('Falsy values: %d', falsyCount);

/**
 * 2. There are pillars near the road. The distance between the pillars is the same and
 * the width of the pillars is the same. Your function accepts three arguments:
 *
 * - number of pillars (>= 1)
 * - distance between pillars (10 - 30 m)
 * - width of the pillar (10 - 50 cm)
 *
 * Calculate the distance between the first and the last pillar in centimeters
 * (without the width of the first and last pillar)
 */

function pillars (numOfPillars, distance, width) {
  return (numOfPillars - 1) * distance * 100
      + ((numOfPillars > 2 ? numOfPillars - 2 : 0) * width);
}
console.log('Pillar distance: %d cm', pillars(5, 50, 10));

/**
 * 3. An isogram is a word that has no repeating letters, consecutive or non-consecutive.
 * Implement a function that determines whether a string that
 * contains only letters is an isogram. Assume that empty string is an isogram. Ignore
 * letter case.
 */

function isIsogram (word) {
  let chars = [];
  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();
    if (chars.indexOf(char) >= 0) {
      return false;
    }
    chars.push(char);
  }
  return true;
}

console.log('Dermatoglyphics is isogram: %s', isIsogram('Dermatoglyphics')); // true
console.log('aba is isogram: %s', isIsogram('aba')); // false
console.log('moOse is isogram: %s', isIsogram('moOse')); // false
