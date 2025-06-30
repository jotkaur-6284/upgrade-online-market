const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  product: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
  },
});

module.exports = mongoose.model("Cart", CartSchema);
