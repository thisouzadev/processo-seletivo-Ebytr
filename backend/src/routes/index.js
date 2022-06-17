const express = require('express');

const {
  createTask,
  getAllTask,
  updateTask,
  getByIdTask,
  excludeTask,
} = require('../controllers/taskController');

const router = express.Router();

router.post('/task', createTask);
router.get('/task', getAllTask);
router.get('/task/:id', getByIdTask);
router.put('/task/:id', updateTask);
router.delete('/task/:id', excludeTask);

const app = express();

module.exports = router;