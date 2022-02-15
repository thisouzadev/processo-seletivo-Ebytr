const express = require('express');
const { addUsers, login } = require('../controllers/usersController');
const { createTask } = require('../controllers/taskController');
const { validateToken } = require('../middlewares/auth');

const router = express.Router();

router.post('/users', addUsers);
router.post('/login', login);

router.post('/task', validateToken, createTask);

module.exports = router;