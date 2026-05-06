const mongoose = require('mongoose');
const User = require('./user');
const Ingredient = require("./ingredient");

const pantryItemSchema = new mongoose.Schema(
  {
    ingredient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ingredient",
      required: true,
    },
    quantity: { type: Number, required: true },
    unit: { type: String, required: true },
    category: {
        type: String,
        required: true,
        enum: ["protein","produce","dairy_fat","grains","spices_seasonings","baking","condiments","beverages","other"],
        lowercase: true
    }
  }
);

const pantrySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [pantryItemSchema]
}, { timestamps: true });

module.exports = mongoose.model('Pantry', pantrySchema);