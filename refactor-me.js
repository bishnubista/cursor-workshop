/**
 * Functions that need refactoring
 * Practice using Cmd+K to improve these
 */

// Exercise 1: Convert to arrow function
function greet(name) {
  return 'Hello, ' + name + '!';
}

// Exercise 2: Add validation
function divide(a, b) {
  return a / b;
}

// Exercise 3: Add default parameters
function createUser(name, role, active) {
  return {
    name: name,
    role: role,
    active: active
  };
}

// Exercise 4: Convert to use template literals
function buildUrl(protocol, domain, path, query) {
  return protocol + '://' + domain + '/' + path + '?' + query;
}

// Exercise 5: Simplify this conditional
function getUserStatus(user) {
  if (user.active === true) {
    if (user.verified === true) {
      return 'active-verified';
    } else {
      return 'active-unverified';
    }
  } else {
    return 'inactive';
  }
}

module.exports = {
  greet,
  divide,
  createUser,
  buildUrl,
  getUserStatus
};

