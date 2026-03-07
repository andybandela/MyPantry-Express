const recipes = require('../data');



exports.recipe = (req, res, next) => {
    let recipeName = req.params.recipeName;
    if (recipeName === 'Chicken_ramen') {
        console.log(recipeName);
        res.json({
            recipe: recipes.Chicken_recipe_data
        });
    } else {
        console.log(recipeName);
        res.json({
            recipe: recipes.Pork_recipe_data
        });
    }
}
