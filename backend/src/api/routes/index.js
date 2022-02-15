const express = require('express');
const { addUsers, login } = require('../controllers/usersController');
const { authValidate } = require('../middlewares/auth');

const router = express.Router();

router.post('/users', addUsers);
router.post('/login', login);
module.exports = router;