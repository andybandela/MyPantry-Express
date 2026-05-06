const recipes = require('../data');
const Recipe = require('../models/recipe');
const Ingredient = require('../models/ingredient');
const User = require('../models/user');


exports.recipe = (req, res, next) => {
    let recId = req.params.recipeId;
    //console.log(`params_id: ${recId}`);
    res.status(200).json({
        recipe: recipes.recipe_content[recId]
    });
    //console.log(recipes.recipe_content[recId]);
    
}
exports.addRecipe = (req, res, next) => {
    const { name, ingredients, instructions, metaInfo } = req.body;
    if (!name || !ingredients || !instructions || !metaInfo) {
        return res.status(400).json({ message: "All fields are required" });
    }
};

exports.createRecipe = async (req, res,next) => {
    try {
        const { title, description, ingredients, instructions, metaInfo, userId } = req.body;
        if (!title || !ingredients || !instructions|| !userId) {
            return res.status(400).json({ message: "Title, ingredients, instructions, and userId are required" });
        }
    const normalizedIngredients = ingredients.map(ing => ({
        ...ing,
        name: ing.name.trim().toLowerCase()
    }));

    const ingredientNames = normalizedIngredients.map(ing => ing.name);
    const existingIngredients = await Ingredient.find({ name: { $in: ingredientNames } });
    
    const existingMap = new Map(
        existingIngredients.map(ing => [ing.name, ing])
    );

    const finalIngredients = [];
    for (const ing of normalizedIngredients) {
        let ingredientDoc = existingMap.get(ing.name);
        if (!ingredientDoc) {
            ingredientDoc = new Ingredient({ name: ing.name });
            await ingredientDoc.save();
            existingMap.set(ing.name, ingredientDoc);
        }
        finalIngredients.push({
            ingredient: ingredientDoc._id,
            quantity: ing.quantity,
            unit: ing.unit
        });
    }
    
    const recipe = new Recipe({
        title,
        description,
        ingredients: finalIngredients,
        instructions,
        metaInfo
    });
    await recipe.save();

    await User.findByIdAndUpdate(userId, { $push: { publishedRecipes: recipe._id } });
    //const populatedRecipe = await Recipe.findById(recipe._id).populate('ingredients.ingredient', 'name');
    res.status(201).json({ message: "Recipe created successfully", recipeId: recipe._id });
    } catch (error) {
        console.error("Error creating recipe:", error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.getAllRecipes = async (req, res, next) => {
    try {
        const recipes = await Recipe.find().populate('ingredients.ingredient', 'name -_id').select('-_id title description instructions metaInfo ingredients.quantity ingredients.unit ingredients.ingredient');
        if (!recipes) {
            return res.status(404).json({ message: "No recipes found" });
        }
        res.status(200).json({ recipes });
    } catch (error) {
        console.error("Error fetching recipes:", error);
        res.status(500).json({ message: "Server error" });
    }
}

exports.getRecipe = async (req, res, next) => {
    try {
        const title = req.params.title;
        const titlere =  title.split(' ').map(word => `(?=.*${word})`).join('');
        const regex = new RegExp(titlere, 'i');
        const recipe = await Recipe.find({ title: {$regex: regex} }).populate('ingredients.ingredient', 'name -_id').select('-_id title description instructions metaInfo ingredients.quantity ingredients.unit ingredients.ingredient');
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.status(200).json({ recipe });
    } catch (error) {
        console.error("Error fetching recipe:", error);
        res.status(500).json({ message: "Server error" });
    }
}