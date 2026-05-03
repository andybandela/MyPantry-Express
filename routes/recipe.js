const express = require('express');

const recipeController = require('../controllers/recipe');

const router = express.Router();

router.get('/:recipeId',recipeController.recipe);
router.post('/create', recipeController.createRecipe);


module.exports = router;