const express = require('express');
const feedController = require('../controllers/feed')

const router = express.Router();

router.get('/recipes', feedController.getRecipes);

module.exports = router;