const recipes = require('../data')

exports.getRecipes = (req,res,next) => {
    res.json({
        recipes : recipes.recipes
    })
};