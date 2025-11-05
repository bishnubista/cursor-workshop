/**
 * Buggy Code Sample
 * This file intentionally contains bugs for learning purposes
 * Use Cursor Chat to find and understand these bugs!
 */

/**
 * Bug 1: Type coercion issue
 * Adds two numbers together
 */
function addNumbers(a, b) {
    return a + b; // What happens if a or b is a string?
}

/**
 * Bug 2: Missing validation
 * Gets user by ID from array
 */
function getUserById(users, id) {
    return users[id]; // What if users is null/undefined? What if id is out of bounds?
}

/**
 * Bug 3: Infinite loop potential
 * Finds first even number
 */
function findFirstEven(numbers) {
    let i = 0;
    while (numbers[i] % 2 !== 0) {
        i++;
    }
    return numbers[i]; // What if no even number exists?
}

/**
 * Bug 4: Reference vs value
 * Removes item from array
 */
function removeItem(array, item) {
    const index = array.indexOf(item);
    array.splice(index, 1); // What if item doesn't exist (index = -1)?
    return array;
}

/**
 * Bug 5: Async handling
 * Fetches user data
 */
function fetchUserData(userId) {
    const data = fetch(`/api/users/${userId}`); // Missing await/then
    return data.name;
}

/**
 * Bug 6: Variable scope
 * Calculates sum of array
 */
function calculateSum(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        var sum = 0; // Variable initialization in wrong place
        sum += numbers[i];
    }
    return sum;
}

/**
 * Bug 7: Incorrect comparison
 * Checks if user is admin
 */
function isAdmin(user) {
    if (user.role = 'admin') { // Assignment instead of comparison
        return true;
    }
    return false;
}

/**
 * Bug 8: Missing return
 * Finds maximum value
 */
function findMax(numbers) {
    if (numbers.length === 0) {
        console.log('Array is empty'); // Should return or throw, not just log
    }

    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

/**
 * Bug 9: Object mutation
 * Updates user email
 */
function updateEmail(user, newEmail) {
    user.email = newEmail; // Mutates original object
    return user;
}

/**
 * Bug 10: Incorrect array method
 * Filters active users
 */
function getActiveUsers(users) {
    return users.map(user => user.isActive); // Should use filter, not map
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        addNumbers,
        getUserById,
        findFirstEven,
        removeItem,
        fetchUserData,
        calculateSum,
        isAdmin,
        findMax,
        updateEmail,
        getActiveUsers
    };
}

/**
 * CHALLENGE: Use Cursor Chat to:
 * 1. Find all bugs in this file
 * 2. Understand why each is a bug
 * 3. Learn how to fix each one
 * 4. Understand best practices to avoid these bugs
 */

