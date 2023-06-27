const express = require('express');
const router = express.Router();


router.post('/add', async (req, res) => {
  try {
    const { num1, num2 } = req.body;
    const result = num1 + num2;

    res.json({ result });
  } catch (error) {
    res.status(500).json({ message: 'Failed to perform addition.' });
  }
});


router.post('/subtract', async (req, res) => {
  try {
    const { num1, num2 } = req.body;
    const result = num1 - num2;

    res.json({ result });
  } catch (error) {
    res.status(500).json({ message: 'Failed to perform subtraction.' });
  }
});

module.exports = router;
