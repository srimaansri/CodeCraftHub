// server.js
// This file starts the Express server on the specified port and connects it to the app.

import app from './app';  // Import the Express app

const PORT = process.env.PORT || 5000;  // Set the port number to use

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);  // Log the server start
});
