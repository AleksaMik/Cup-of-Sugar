const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const rentalSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

const Rental = model("Rental", rentalSchema);

module.exports = Rental;
