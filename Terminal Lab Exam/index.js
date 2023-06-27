const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

// Connect to MongoDB
const mongoString = 'mongodb://127.0.0.1:27017';

mongoose
  .connect(mongoString)
  .then(() => {
    console.log('Database Connected');
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const port = 3002;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

