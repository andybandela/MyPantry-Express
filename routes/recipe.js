const express = require('express');

const recipeController = require('../controllers/recipe');

const router = express.Router();

router.get('/all', recipeController.getAllRecipes);
router.post('/create', recipeController.createRecipe);
router.get('/:title',recipeController.getRecipe);
router.get('/:recipeId',recipeController.recipe);


module.exports = router;