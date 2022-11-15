const mongoose = require('mongoose');

const { Schema } = mongoose;

const rentalSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
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
