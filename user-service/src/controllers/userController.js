// userController.js
// This file contains the logic for handling user-related operations such as registration, login, and updating usernames.

const User = require('../models/userModel');  // Import User model to interact with the MongoDB database
const bcrypt = require('bcryptjs');  // Import bcrypt for hashing passwords
const jwt = require('jsonwebtoken');  // Import jsonwebtoken to generate JWT tokens

// Register a new user
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if the user already exists in the database by email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      // Return an error if the user already exists
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({ username, email, password: hashedPassword });

    // Save the new user to the database
    await newUser.save();
    // Respond with success
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    // If an error occurs, send an error response
    res.status(500).json({ error: error.message });
  }
};

// Login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if the user exists by email
    const user = await User.findOne({ email });
    if (!user) {
      // Return an error if the user does not exist
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      // Return an error if the password does not match
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token upon successful login
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Respond with the token
    res.json({ token });
  } catch (error) {
    // If an error occurs, send an error response
    res.status(500).json({ error: error.message });
  }
};

// Update username of an existing user
const updateUsername = async (req, res) => {
  const { newUsername } = req.body;
  const { id } = req.params; // ID from URL parameters
  try {
    // Update the username in the database for the given user ID
    const user = await User.findByIdAndUpdate(id, { username: newUsername }, { new: true });
    
    if (!user) {
      // Return an error if the user was not found
      return res.status(404).json({ message: 'User not found' });
    }

    // Respond with success message and the updated user object
    res.status(200).json({ message: 'User profile updated successfully', user });
  } catch (error) {
    // If an error occurs, send an error response
    res.status(500).json({ message: 'Error updating user', error });
  }
};

// Export all functions to be used in routes
module.exports = { registerUser, loginUser, updateUsername };
