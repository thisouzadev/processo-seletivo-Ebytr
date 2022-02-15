const { findAll } = require('../models/taskModel');
const { TaskCreate } = require('../services/taskService');
const { created, success } = require('../utils/dictionary/statusCode');

const createTask = async (req, res, next) => {
  try {
    const { status, task} = req.body;
    const { _id: userId} = req.user;
console.log(userId, 'ijdi');
    const addTask = await TaskCreate(status, task, userId);
    return res.status(created).json(addTask);
  } catch (error) {
    console.log(`POST CREATETASK -> ${error.message}`);
    return next(error);
  }
}

const getAllTask = async (req, res, next) => {
  try {
    const findAllTask = await findAll();
    return res.status(success).json(findAllTask);
  } catch (error) {
    console.log(`GET FINDALLTASK-> ${error.message}`);
    return next(error);
  }
};

module.exports = {
  createTask,
  getAllTask,
};