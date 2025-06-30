// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const path = require("path");

// const app = express();
// const PORT = process.env.PORT || 5000;


// const cartRoutes = require("./server/routes/cart");

// // Connect to MongoDB
// mongoose.connect(
//   "mongodb+srv://DBjot:jot6284@cluster6284.vdk322b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster6284",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// )
// .then(() => console.log("MongoDB connected"))
// .catch((err) => console.error("MongoDB connection error:", err));

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.static(path.join(__dirname, "public")));

// // User Schema & Model
// const UserSchema = new mongoose.Schema(
//   {
//     username: String,
//     password: String,
//   },
//   { collection: "abc" }
// );

// const User = mongoose.models.User || mongoose.model("User", UserSchema);

// // Signup route
// app.post("/api/signup", async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const newUser = new User({ username, password });
//     await newUser.save();

//     return res.json({ message: "Signup successful!" });
//   } catch (error) {
//     return res.status(500).json({ message: "Server error" });
//   }
// });


// app.post("/api/login", async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     const user = await User.findOne({ username, password });

//     if (user) {
//       // Full user object send karo
//       return res.json({
//         message: "Login successful! ",
//         user: {
//           _id: user._id,
//           username: user.username,
//         },
//       });
//     } else {
//       return res.status(401).json({ message: "Invalid credentials" });
//     }
//   } catch (error) {
//     return res.status(500).json({ message: "Server error" });
//   }
// });

// app.use("/cart", cartRoutes);                // ✅ And this

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

dotenv.config(); // Load environment variables from .env

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(
  "mongodb+srv://DBjot:jot6284@cluster6284.vdk322b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster6284",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
const cartRoutes = require("./server/routes/cart");
const paymentRoutes = require("./server/payment"); // Stripe route

app.use("/cart", cartRoutes);
app.use("/api/payment", paymentRoutes); // New Stripe route

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
