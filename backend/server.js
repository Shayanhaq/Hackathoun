// // server.js (Node.js/Express)

// const express = require('express');
// const cors = require('cors');
// const app = express();

// // Enable CORS for all origins (or specify your frontend URL)
// app.use(cors());
// app.use(express.json()); // Parse incoming JSON data

// // Registration endpoint
// app.post('/register', (req, res) => {
//   const { fullName, cnic, email } = req.body;

//   // Basic validation
//   if (!fullName || !cnic || !email) {
//     return res.status(400).json({ message: 'All fields are required.' });
//   }

//   // You can add database logic here to save the user data
//   console.log('User Registered:', { fullName, cnic, email });

//   // Send a success response
//   res.status(200).json({ message: 'Registration successful' });
// });

// // Start the server
// const port = 5000;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // Enable CORS to allow cross-origin requests
app.use(express.json()); // Parse JSON request bodies

app.post('/register', (req, res) => {
  const { fullName, cnic, email } = req.body;
  if (!fullName || !cnic || !email) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Simulate successful registration
  res.status(200).json({ message: 'Registration successful!' });
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
