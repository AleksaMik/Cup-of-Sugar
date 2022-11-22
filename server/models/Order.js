const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  rentals: [
    {
      type: Schema.Types.ObjectId,
      ref: "Rental",
    },
  ],
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
