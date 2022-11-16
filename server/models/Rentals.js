const mongoose = require('mongoose');

const { Schema } = mongoose;

const rentalSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true 
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Items',
    },
  ],
});

const Rentals = mongoose.model('Rentals', rentalSchema);

module.exports = Rentals;
