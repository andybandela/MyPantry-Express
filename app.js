const express = require("express");
const feedRoutes = require("./routes/feed");
const recipeRoutes = require("./routes/recipe");
const categoryRoutes = require("./routes/category");
const userRoutes = require("./routes/user");
const PantryRoutes = require("./routes/pantry");
const path = require("path");
const mongoose = require("mongoose");
const { log } = require("console");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/user", userRoutes);
app.use("/feed", feedRoutes);
app.use("/recipe", recipeRoutes);
app.use("/category", categoryRoutes);
app.use("/pantry", PantryRoutes);

const main = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/recetty-app");
    console.log("Connected to MongoDB server");
    app.listen(8080);
    console.log("Server is running on port 8080");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
};

main();
