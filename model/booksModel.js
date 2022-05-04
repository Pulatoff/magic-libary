const mongoose = require('mongoose');

const bookScheme = new mongoose.Schema({
  nameBook: {
    type: String,
    trim: true,
    required: [true, 'Buni tuldirish majburiy'],
  },
  writeDate: {
    type: Date,
    required: true,
  },
  rate: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    default: 0,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 100,
  },
});

module.exports = mongoose.model('books', bookScheme);
