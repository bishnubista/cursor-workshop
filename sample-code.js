/**
 * Sample Code for Agent Mode Practice
 * Agent will add tests, documentation, and improvements to these functions
 */

function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function findMax(arr) {
  return Math.max(...arr);
}

module.exports = {
  factorial,
  fibonacci,
  isPrime,
  reverseString,
  findMax
};

