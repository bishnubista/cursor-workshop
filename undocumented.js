/**
 * Functions Without Documentation
 * Add JSDoc comments using Cmd+K
 */

function calculateTotal(items, taxRate, discount) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const afterDiscount = subtotal * (1 - discount);
  const total = afterDiscount * (1 + taxRate);
  return total;
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function formatDate(date, format) {
  const options = {
    'short': { year: '2-digit', month: '2-digit', day: '2-digit' },
    'long': { year: 'numeric', month: 'long', day: 'numeric' },
    'iso': { year: 'numeric', month: '2-digit', day: '2-digit' }
  };
  
  if (!options[format]) {
    format = 'long';
  }
  
  return new Intl.DateTimeFormat('en-US', options[format]).format(date);
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  
  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}

module.exports = {
  calculateTotal,
  validateEmail,
  formatDate,
  debounce,
  deepClone
};

