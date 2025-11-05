/**
 * Complex Function Needing Extraction
 * Practice extracting logic into smaller functions
 */

function processOrder(order, customerId) {
  // Validation logic - extract this
  if (!order || !order.items || order.items.length === 0) {
    throw new Error('Order must have items');
  }
  
  if (!customerId) {
    throw new Error('Customer ID is required');
  }
  
  for (const item of order.items) {
    if (!item.productId || !item.quantity || item.quantity <= 0) {
      throw new Error('Invalid item in order');
    }
  }
  
  // Calculation logic - extract this
  const subtotal = order.items.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);
  
  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  
  const shippingCost = subtotal > 100 ? 0 : 10;
  
  const total = subtotal + tax + shippingCost;
  
  // Inventory checking - extract this
  for (const item of order.items) {
    const product = inventory.get(item.productId);
    if (!product || product.stock < item.quantity) {
      throw new Error(`Insufficient stock for product ${item.productId}`);
    }
  }
  
  // Database operations - extract this
  const savedOrder = {
    id: generateOrderId(),
    customerId: customerId,
    items: order.items,
    subtotal: subtotal,
    tax: tax,
    shipping: shippingCost,
    total: total,
    status: 'pending',
    createdAt: new Date()
  };
  
  database.orders.insert(savedOrder);
  
  // Email sending - extract this
  const emailBody = `
    Thank you for your order!
    Order ID: ${savedOrder.id}
    Total: $${total.toFixed(2)}
  `;
  
  emailService.send({
    to: getCustomerEmail(customerId),
    subject: 'Order Confirmation',
    body: emailBody
  });
  
  return savedOrder;
}

// Helper functions (these are okay)
function generateOrderId() {
  return 'ORD-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

function getCustomerEmail(customerId) {
  return database.customers.findById(customerId).email;
}

// Mock objects for the code to work
const inventory = {
  get: (id) => ({ stock: 100 })
};

const database = {
  orders: {
    insert: (order) => order
  },
  customers: {
    findById: (id) => ({ email: 'customer@example.com' })
  }
};

const emailService = {
  send: (email) => ({ messageId: '123' })
};

module.exports = { processOrder };

