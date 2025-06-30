const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Cart = require("../models/Cart");

// ✅ Safe import or define User model
const User = mongoose.models.User || mongoose.model("User", new mongoose.Schema({
  username: String,
  password: String,
}, { collection: "abc" }));

// ➕ Add to Cart
router.post("/add", async (req, res) => {
  const { username, product } = req.body;

  console.log("📨 POST /cart/add");
  console.log("👤 Received username:", username);
  console.log("📦 Received product:", product);

  try {
    const user = await User.findOne({ username });

    if (!user) {
      console.log("❌ User not found in DB");
      return res.status(404).json({ error: "User not found" });
    }

    const item = new Cart({ userId: user._id, product });
    await item.save();

    console.log("✅ Saved to DB:", item);
    res.status(201).json({ message: "Item added to cart" });
  } catch (err) {
    console.error("❌ Error saving cart:", err);
    res.status(500).json({ error: "Failed to save cart item" });
  }
});

// 📦 Get Cart Items by User ID
router.get("/user/:id", async (req, res) => {
  try {
    const items = await Cart.find({ userId: req.params.id });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cart" });
  }
});

// ❌ Delete Cart Item
router.delete("/delete/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted from cart" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete item" });
  }
});

module.exports = router;
