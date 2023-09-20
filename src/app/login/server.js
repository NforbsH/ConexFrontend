const express = require('express');
const { Pool } = require('pg');

const app = express();

// Set PostgreSQL connection pool
const pool = new Pool({
    user: 'NHN',
    host: 'localhost',
    database: 'conex',
    password: '1234',
    port: 5432,
  });

  // parse JSON request
app.use(express.json());

// Route handler code for signup form submission
app.post('/signup', async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    // Insert the user data into the database
    const query = 'INSERT INTO customer (firstname, lastname, email, password) VALUES ($1, $2, $3, $4)';
    await pool.query(query, [firstname, lastname, email, password]);

    // Send a success response
    res.status(200).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'An error occurred during signup' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

  