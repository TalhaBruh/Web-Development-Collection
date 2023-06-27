const mongoose = require('mongoose');

const operationSchema = new mongoose.Schema({
  num1: {
    type: Number,
    required: true,
  },
  num2: {
    type: Number,
    required: true,
  },
  result: {
    type: Number,
    required: true,
  },
  operationType: {
    type: String,
    enum: ['add', 'subtract'],
    required: true,
  },
});

const Operation = mongoose.model('Operation', operationSchema);
module.exports = Operation;
