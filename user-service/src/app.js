// app.js
// This is the main application file that sets up the Express app and connects to the database.

import express, { json } from 'express'; // Import express for setting up the server and json middleware
import connectDB from './config/db'; // Import the function to connect to the database
import userRoutes from './routes/userRoutes'; // Import user-related routes
import { config } from 'dotenv'; // Import dotenv to handle environment variables

// Configure environment variables
config();

const app = express();  // Create an instance of the Express application

app.use(json());  // Use JSON middleware to parse incoming request bodies
connectDB();  // Connect to the MongoDB database

// Use the userRoutes for handling user-related API requests
app.use('/api/users', userRoutes);

// Export the app for use in server.js
export default app;
