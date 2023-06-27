const express = require('express');
const router = express.Router();

// POST add
router.post('/add', async (req, res) => {
  try {
    const { num1, num2 } = req.body;

    if (num1 === undefined || num2 === undefined) {
      return res.status(400).json({ message: 'Both num1 and num2 are required.' });
    }

    const result = num1 + num2;

    res.json({ result });
  } catch (error) {
    res.status(500).json({ message: 'Failed to perform addition.' });
  }
});

// POST subtract
router.post('/subtract', async (req, res) => {
  try {
    const { num1, num2 } = req.body;

    if (num1 === undefined || num2 === undefined) {
      return res.status(400).json({ message: 'Both num1 and num2 are required.' });
    }

    const result = num1 - num2;

    res.json({ result });
  } catch (error) {
    res.status(500).json({ message: 'Failed to perform subtraction.' });
  }
});

module.exports = router;
