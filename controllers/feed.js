const recipes = require('../data')

exports.getRecipes = (req,res,next) => {
    res.status(200).json({
        recipes : recipes.recipes
    })
    console.log(`Sent: 200`)
};