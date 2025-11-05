/**
 * User Validation Tests
 * Practice: Write one test, then let Tab suggest similar patterns
 */

// Simple test helpers
function test(description, fn) {
  try {
    fn();
    console.log(`✓ ${description}`);
  } catch (error) {
    console.log(`✗ ${description}: ${error.message}`);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Expected ${expected}, got ${actual}`);
      }
    },
    toBeTrue() {
      if (actual !== true) {
        throw new Error(`Expected true, got ${actual}`);
      }
    },
    toBeFalse() {
      if (actual !== false) {
        throw new Error(`Expected false, got ${actual}`);
      }
    }
  };
}

// Validation functions to test
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateName(name) {
  return name && name.length >= 2 && name.length <= 50;
}

function validatePassword(password) {
  return password && password.length >= 8;
}

function validateAge(age) {
  return typeof age === 'number' && age >= 0 && age <= 150;
}

function validatePhone(phone) {
  const phoneRegex = /^\+?[\d\s-()]+$/;
  return phone && phoneRegex.test(phone) && phone.length >= 10;
}

// TODO: Write the first test manually, then let Tab suggest more

// Example first test:
// test('validates email format', () => {
//   expect(validateEmail('test@example.com')).toBeTrue();
// });

// Now type "test('validates" and let Tab suggest similar test cases

