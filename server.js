
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const app = express();

// dotenv.config(); // Load environment variables from .env

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // MongoDB connection
// require('dotenv').config();

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Routes
// const cartRoutes = require("./server/routes/cart");
// const paymentRoutes = require("./server/payment"); // Stripe route

// app.use("/cart", cartRoutes);
// app.use("/api/payment", paymentRoutes); // New Stripe route

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });




// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const app = express();

// dotenv.config(); // Load environment variables from .env

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

// // Routes
// const cartRoutes = require("./server/routes/cart");
// const paymentRoutes = require("./server/payment"); // Stripe route

// app.use("/cart", cartRoutes);
// app.use("/api/payment", paymentRoutes);

// // ✅ Root route to confirm backend is live
// app.get('/', (req, res) => {
//   res.send('✅ Backend is live and working!');
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const User = require("./server/models/User"); // ✅ Make sure this file exists

dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
const cartRoutes = require("./server/routes/cart");
const paymentRoutes = require("./server/payment");

app.use("/cart", cartRoutes);
app.use("/api/payment", paymentRoutes);

// ✅ LOGIN ROUTE
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username }); // or use email
    if (!user || user.password !== password) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    return res.json({ success: true, user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// ✅ Root route
app.get('/', (req, res) => {
  res.send('✅ Backend is live and working!');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
