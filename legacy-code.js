/**
 * Legacy JavaScript Code
 * Modernize this using Cmd+K
 */

// Old style function declarations with var
var calculateArea = function(width, height) {
  var area = width * height;
  return area;
};

// String concatenation instead of template literals
var buildGreeting = function(firstName, lastName) {
  return 'Welcome, ' + firstName + ' ' + lastName + '!';
};

// Old style array iteration
var doubleNumbers = function(numbers) {
  var result = [];
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
  }
  return result;
};

// No destructuring
var getUserInfo = function(user) {
  var name = user.name;
  var email = user.email;
  var age = user.age;
  return name + ' (' + email + '), age: ' + age;
};

// Promise chains instead of async/await
var fetchAndProcess = function(url) {
  return fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return data.items;
    })
    .catch(function(error) {
      console.error('Error:', error);
    });
};

// Old style object creation
var createProduct = function(id, name, price) {
  return {
    id: id,
    name: name,
    price: price,
    getPrice: function() {
      return '$' + this.price;
    }
  };
};

module.exports = {
  calculateArea: calculateArea,
  buildGreeting: buildGreeting,
  doubleNumbers: doubleNumbers,
  getUserInfo: getUserInfo,
  fetchAndProcess: fetchAndProcess,
  createProduct: createProduct
};

