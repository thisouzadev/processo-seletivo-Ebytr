const { findAll, update } = require('../models/taskModel');
const { TaskCreate } = require('../services/taskService');
const { created, success } = require('../utils/dictionary/statusCode');

const createTask = async (req, res, next) => {
  try {
    const { status, task} = req.body;
    const { _id: userId} = req.user;

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

const updateTask = async (req, res, next) => {
  try {
    const { params: { id }, body: task, user: { _id } } = req;

    await update(id, task);

    res.status(200).json({ _id: id, ...task, userId: _id });
  } catch (error) {
    console.log(`PUT UPDATETask -> ${error.message}`);
    next(error);
  }
};

module.exports = {
  createTask,
  getAllTask,
  updateTask,
};