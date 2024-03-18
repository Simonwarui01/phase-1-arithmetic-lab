
// Write your code here
const num1 = 31;
const num2 = 2;

// Define multiply as the multiplication of num1 and num2
const multiply = num1 * num2;

// Define random as a random integer greater than 0
const random = Math.floor(Math.random() * 100) + 1;

// Define num3 and num4
const num3 = 25;
const num4 = 21;

// Define mod as the remainder of num3 divided by num4
const mod = num3 % num4;

// Define an array of numbers for max
const numbers = [5, 10, 15, 20, 8];

// Define max as the maximum number in the array
const max = Math.max(...numbers);

module.exports = {
    multiply,
    random,
    mod,
    max
};