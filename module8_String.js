/**
 * 1.
 * Given the string 'ahb acb aeb aeeb adcb axeb'. Write a regular expression that matches the strings ahb, acb, aeb by pattern: letter 'a', any character, letter 'b'
 */

let str1 = "ahb acb aeb aeeb adcb axeb";

const regExp = /a.b/gi;

let result = str1.match(regExp);

console.log(result);

/**
 * 2.
 * Given the string '2 + 3 223 2223'. Write a regex that finds line 2 + 3 without capturing the rest
 */
let str2 = "2 + 3 223 2223";

const regExp2 = /\d \+ \d/gi;

let result2 = str2.match(regExp2);

console.log(result2);
/**
 * 3.
 * Get the day, month and year of the current date and output it to the console separately
 */

const now = new Date();

const day = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();

console.log(day + " " + month + " " + year);
