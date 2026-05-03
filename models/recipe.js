const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    ingredients: [
      {
        ingredient: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Ingredient",
          required: true,
        },
        quantity: Number,
        unit: String,
      },
    ],
    instructions: { type: String, required: true },
    metaInfo: {
      cuisineType: String,
      category: String,
      tags: [String],
      mealType: String,
      prepTime: Number,
      cookTime: Number,
      bakeTime: Number,
      restTime: Number,
      servings: Number,
      imageUrl: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Recipe", recipeSchema);
