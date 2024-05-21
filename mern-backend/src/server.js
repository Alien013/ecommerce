const express = require("express");
const env = require("dotenv");
const app = express();
// const bodyParser = require('body-parser');
const mongoose = require("mongoose");

// Routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
// const bodyParser = require("body-parser");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");

// Calling Environment variables or constants
env.config();

// Mongodb Connection
// mongodb+srv://<username>:<password>@cluster0.n8uxb4a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.n8uxb4a.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Database Connected");
  });

// app.use(bodyParser());
app.use(express.json());

app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
