const { TaskCreate } = require('../services/taskService');
const { created } = require('../utils/dictionary/statusCode');

const createTask = async (req, res, next) => {
  try {
    const { status, task} = req.body;
    const {_id: userId} = req.user;

    const addTask = await TaskCreate(status, task, userId);
    return res.status(created).json(addTask);
  } catch (error) {
    console.log(`POST CREATETASK -> ${error.message}`);
    return next(error);
  }
}

module.exports = {
  createTask,
};