const recipes = require('../data');



exports.recipe = (req, res, next) => {
    let recipeName = req.params.recipeName;
    if (recipeName === 'chicken_ramen') {
        console.log(`params: ${recipeName}`);
        res.status(200).json({
            recipe: recipes.Pork_recipe_data
        });
        console.log(`data: ${recipes.Chicken_recipe_data.recipe_name}`);
        
    }else {
        console.log(`params: ${recipeName}`);
        res.status(200).json({
            recipe: recipes.Chicken_recipe_data
        });
        console.log(`data: ${recipes.Pork_recipe_data.recipe_name}`);
    }
}
