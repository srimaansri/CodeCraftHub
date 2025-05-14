const express = require('express');
const { registerUser, loginUser, updateUsername } = require('../controllers/userController'); // Import functions from userController

console.log('registerUser:', registerUser); // Log to check if it's imported correctly
console.log('loginUser:', loginUser); // Log to check if it's imported correctly
console.log('updateUsername:', updateUsername); // Log to check if it's imported correctly

const router = express.Router();

// Make sure the imported functions are valid
router.post('/register', registerUser); // Register route
router.post('/login', loginUser); // Login route
router.put('/:id', updateUsername); // Update username route

module.exports = router;
