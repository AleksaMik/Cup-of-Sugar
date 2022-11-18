const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
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

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
