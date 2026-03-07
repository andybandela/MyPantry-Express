const express = require('express');

const recipeController = require('../controllers/recipe')

const router = express.Router();

router.get('/:recipeName',recipeController.recipe);


module.exports = router;