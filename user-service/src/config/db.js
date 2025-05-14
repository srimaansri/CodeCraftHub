// db.js
// This file is used to connect to the MongoDB database using Mongoose.

import mongoose from 'mongoose';  // Import Mongoose to interact with MongoDB

// Function to connect to the database
const connectDB = async () => {
  try {
    // Connect to MongoDB using Mongoose and the MongoDB URI stored in environment variables
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,  // Use the new URL parser (for compatibility)
      useUnifiedTopology: true,  // Use unified topology (for better connection management)
    });
    console.log('MongoDB connected');  // Log a message once connected
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);  // Log any connection errors
    process.exit(1);  // Exit the process with failure code
  }
};

export default connectDB;  // Export the function for use in app.js
