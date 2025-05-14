// userModel.js
// This file defines the User schema and model for MongoDB using Mongoose.

import mongoose from 'mongoose';  // Import Mongoose to define the schema

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,  // Ensure the username is unique
  },
  email: {
    type: String,
    required: true,
    unique: true,  // Ensure the email is unique
  },
  password: {
    type: String,
    required: true,  // Password is required
  },
}, { timestamps: true });  // Automatically add createdAt and updatedAt fields

// Create the User model based on the schema
const User = mongoose.model('User', userSchema);

export default User;  // Export the model for use in controllers
