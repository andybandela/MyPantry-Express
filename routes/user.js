const express = require('express');

const userController = require('../controllers/user');
const router = express.Router();

router.post('/register', userController.createUser);
router.get('/profile/:userId', userController.getUser);

module.exports = router;