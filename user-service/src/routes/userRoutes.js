// userRoutes.js
// This file contains the routes for user-related API endpoints such as registration, login, and username update.

const express = require('express');
const {
  registerUser,
  loginUser,
  updateUsername,
} = require('../controllers/userController'); // Import controller functions

const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);  // POST /api/users/register

// Route to login a user
router.post('/login', loginUser);  // POST /api/users/login

// Route to update user username by ID
router.put('/:id', updateUsername); // PUT /api/users/:id

// Export the router to be used in app.js
module.exports = router;
