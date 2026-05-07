const categories = require('../data');
const Recipe = require('../models/recipe');


exports.category = (req,res,next) =>{
    res.status(200).json({
        cat: categories.categories
    });
}
exports.getCategory = async(req,res) =>{
    try {
        const category = req.params.category;
        console.log("category: ", category);
        const recipes = await Recipe.find({ "metaInfo.category": category }).select('title description metaInfo.cuisineType metaInfo.tags');
        if (!recipes) {
            return res.status(404).json({ message: "No recipes found for this category" });
        }
        console.log("recipes: ",recipes);
        return res.status(200).json({ recipes });
    } catch (error) {
        console.error("Error fetching recipes by category:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
    

}