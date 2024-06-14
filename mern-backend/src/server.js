const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const { check, validationResult } = require("express-validator");

// Load environment variables
env.config();

// Routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const cartRoutes = require("./routes/cart");

// MongoDB Connection
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.n8uxb4a.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from the 'uploads' directory
app.use("/public", express.static(path.join(__dirname, "uploads")));

// Use routes
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", cartRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
