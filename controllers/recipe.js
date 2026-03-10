const recipes = require('../data');



exports.recipe = (req, res, next) => {
    let recId = req.params.recipeId;
    //console.log(`params_id: ${recId}`);
    res.status(200).json({
        recipe: recipes.recipe_content[recId]
    });
    //console.log(recipes.recipe_content[recId]);
    
}
