/**
 * Tests for calculator.js
 * Run with: node calculator.test.js
 */

const { calculate, square, percentage, roundTo } = require('./calculator');

// Simple test framework
let passed = 0;
let failed = 0;

function test(description, fn) {
  try {
    fn();
    console.log(`✓ ${description}`);
    passed++;
  } catch (error) {
    console.log(`✗ ${description}`);
    console.log(`  Error: ${error.message}`);
    failed++;
  }
}

function assertEquals(actual, expected, message = '') {
  if (actual !== expected) {
    throw new Error(
      `Expected ${expected}, but got ${actual}. ${message}`
    );
  }
}

function assertThrows(fn, errorMessage) {
  let thrown = false;
  try {
    fn();
  } catch (error) {
    thrown = true;
    if (errorMessage && !error.message.includes(errorMessage)) {
      throw new Error(
        `Expected error message to include "${errorMessage}", but got "${error.message}"`
      );
    }
  }
  if (!thrown) {
    throw new Error('Expected function to throw an error, but it did not');
  }
}

// Test calculate function
console.log('\n--- Testing calculate() ---\n');

test('adds two numbers correctly', () => {
  assertEquals(calculate(2, 3, 'add'), 5);
});

test('subtracts two numbers correctly', () => {
  assertEquals(calculate(5, 3, 'subtract'), 2);
});

test('multiplies two numbers correctly', () => {
  assertEquals(calculate(4, 3, 'multiply'), 12);
});

test('divides two numbers correctly', () => {
  assertEquals(calculate(10, 2, 'divide'), 5);
});

test('throws error when dividing by zero', () => {
  assertThrows(() => calculate(10, 0, 'divide'), 'Cannot divide by zero');
});

test('throws error for unknown operation', () => {
  assertThrows(() => calculate(10, 2, 'power'), 'Unknown operation');
});

// Test square function
console.log('\n--- Testing square() ---\n');

test('squares positive numbers correctly', () => {
  assertEquals(square(5), 25);
});

test('squares negative numbers correctly', () => {
  assertEquals(square(-3), 9);
});

test('squares zero correctly', () => {
  assertEquals(square(0), 0);
});

// Test percentage function
console.log('\n--- Testing percentage() ---\n');

test('calculates percentage correctly', () => {
  assertEquals(percentage(100, 10), 10);
});

test('calculates percentage of decimal values', () => {
  assertEquals(percentage(50.5, 20), 10.1);
});

// Test roundTo function
console.log('\n--- Testing roundTo() ---\n');

test('rounds to 2 decimal places by default', () => {
  assertEquals(roundTo(3.14159), 3.14);
});

test('rounds to specified decimal places', () => {
  assertEquals(roundTo(3.14159, 3), 3.142);
});

test('handles whole numbers', () => {
  assertEquals(roundTo(5), 5);
});

// Summary
console.log(`\n--- Test Summary ---`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log(`Total: ${passed + failed}\n`);

process.exit(failed > 0 ? 1 : 0);

