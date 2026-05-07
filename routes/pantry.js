const express = require('express');

const pantryController = require('../controllers/pantry');

const router = express.Router();

router.post('/add', pantryController.addItem);
router.post('/increase', pantryController.increaseQuantity);
router.post('/decrease', pantryController.decreaseQuantity);
router.get('/getAll', pantryController.getPantryItems);
router.delete('/remove', pantryController.deletePantryItem);

module.exports = router;