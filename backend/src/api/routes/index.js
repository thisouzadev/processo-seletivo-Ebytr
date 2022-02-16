const express = require('express');

const { addUsers, login } = require('../controllers/usersController');
const {
  createTask,
  getAllTask,
  updateTask,
  getByIdTask,
  excludeTask,
} = require('../controllers/taskController');

const { validateToken } = require('../middlewares/auth');

const router = express.Router();

router.post('/users', addUsers);
router.post('/login', login);

router.post('/task', validateToken, createTask);
router.get('/task', getAllTask);
router.get('/task/:id', validateToken, getByIdTask);
router.put('/task/:id', validateToken, updateTask);
router.delete('/task/:id', validateToken, excludeTask);


module.exports = router;