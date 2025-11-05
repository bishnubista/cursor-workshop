/**
 * Documentation Practice
 * Use Tab to generate JSDoc comments
 */

// TODO: Type /** above each function and let Tab generate documentation

// Exercise 1: Document this function
// Type /** and press Enter above the function
function calculateShipping(weight, distance, priority) {
  return weight * distance * (priority ? 1.5 : 1.0);
}

// Exercise 2: Document this function
function processOrder(orderId, customerId, items, paymentMethod) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return {
    orderId,
    customerId,
    total,
    paymentMethod,
    status: 'processing',
    createdAt: new Date()
  };
}

// Exercise 3: Document this async function
async function fetchUserProfile(userId, includeOrders = false, includePreferences = true) {
  const user = await database.users.findById(userId);
  
  if (includeOrders) {
    user.orders = await database.orders.findByUser(userId);
  }
  
  if (includePreferences) {
    user.preferences = await database.preferences.findByUser(userId);
  }
  
  return user;
}

// Exercise 4: Document this class method
class UserService {
  constructor(database) {
    this.database = database;
  }

  async createUser(userData) {
    const user = await this.database.users.create(userData);
    await this.sendWelcomeEmail(user.email);
    return user;
  }

  async updateUser(userId, updates) {
    return await this.database.users.update(userId, updates);
  }
}

// Exercise 5: Document this utility function
function formatCurrency(amount, currency = 'USD', locale = 'en-US') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(amount);
}

