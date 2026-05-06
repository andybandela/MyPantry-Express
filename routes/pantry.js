const express = require('express');

const pantryController = require('../controllers/pantry');

const router = express.Router();

router.post('/add', pantryController.addItem);

module.exports = router;