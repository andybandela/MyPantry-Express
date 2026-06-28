const express = require('express');

const recipeController = require('../controllers/recipe');

const router = express.Router();

router.get('/all', recipeController.getAllRecipes);
router.post('/create', recipeController.createRecipe);
router.get('/:recipeId',recipeController.recipe);
router.get('/:title',recipeController.getRecipe);


module.exports = router;