const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  pantry: [{ type: mongoose.Schema.Types.ObjectId, ref: "PantryItem" }],
  groceryList: [{ type: mongoose.Schema.Types.ObjectId, ref: "GroceryItem" }],
  favoriteRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
  preferences: {
    dietaryRestrictions: [String],
    cuisineTypes: [String],
    mealTypes: [String],
  },
  publishedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
