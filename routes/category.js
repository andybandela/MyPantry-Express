const express = require('express');
const categoryController = require('../controllers/category');

const router = express.Router();

//router.get('/',categoryController.category);
router.get('/:category',categoryController.getCategory);


module.exports = router;