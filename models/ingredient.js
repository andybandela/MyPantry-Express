const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  synonyms: [String]
});

module.exports = mongoose.model('Ingredient', ingredientSchema);