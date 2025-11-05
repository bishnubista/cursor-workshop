/**
 * Simple Calculator
 * A basic calculator implementation for learning purposes
 */

/**
 * Performs basic arithmetic operations
 * @param {number} a - First number
 * @param {number} b - Second number
 * @param {string} operation - The operation to perform (add, subtract, multiply, divide)
 * @returns {number} The result of the operation
 */
function calculate(a, b, operation) {
  switch (operation) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) {
        throw new Error('Cannot divide by zero');
      }
      return a / b;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
}

/**
 * Calculates the square of a number
 * @param {number} n - The number to square
 * @returns {number} The square of n
 */
function square(n) {
  return n * n;
}

/**
 * Calculates the percentage of a number
 * @param {number} value - The value
 * @param {number} percentage - The percentage to calculate
 * @returns {number} The percentage value
 */
function percentage(value, percentage) {
  return (value * percentage) / 100;
}

/**
 * Rounds a number to specified decimal places
 * @param {number} value - The value to round
 * @param {number} decimals - Number of decimal places
 * @returns {number} Rounded value
 */
function roundTo(value, decimals = 2) {
  const multiplier = Math.pow(10, decimals);
  return Math.round(value * multiplier) / multiplier;
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    calculate,
    square,
    percentage,
    roundTo
  };
}

