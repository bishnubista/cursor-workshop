/**
 * Async Functions Without Error Handling
 * Use Cmd+K to add try-catch blocks
 */

// Exercise: Add error handling to all these functions

async function fetchUserData(userId) {
  const response = await fetch(`/api/users/${userId}`);
  const data = await response.json();
  return data;
}

async function saveToDatabase(data) {
  const result = await database.insert(data);
  return result.id;
}

async function processPayment(orderId, amount) {
  const payment = await paymentGateway.charge(amount);
  await database.orders.update(orderId, { paid: true });
  return payment.transactionId;
}

async function sendEmail(to, subject, body) {
  const result = await emailService.send({
    to: to,
    subject: subject,
    body: body
  });
  return result.messageId;
}

async function uploadFile(file) {
  const uploaded = await storage.upload(file);
  return uploaded.url;
}

module.exports = {
  fetchUserData,
  saveToDatabase,
  processPayment,
  sendEmail,
  uploadFile
};

