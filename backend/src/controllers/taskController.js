const { findAll, update, exclude } = require('../models/taskModel');
const { TaskCreate, findByIdOneTask } = require('../services/taskService');
const { created, success, noContent } = require('../utils/dictionary/statusCode');

const createTask = async (req, res, next) => {
  try {
    const { status, task} = req.body;

    const addTask = await TaskCreate(status, task);
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
    const { params: { id }, body: task } = req;

    await update(id, task);

    res.status(200).json({ _id: id, ...task });
  } catch (error) {
    console.log(`PUT UPDATETask -> ${error.message}`);
    next(error);
  }
};

const getByIdTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await findByIdOneTask(id);

    if (task.error) return next(task.error);
    return res.status(success).json(task);
  } catch (error) {
    console.log(`GET FINDBYIDTASK -> ${error.message}`);
    return next(error);
  }
};

const excludeTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await exclude(id);
    return res.status(noContent).json(task);
  } catch (error) {
    console.log(`DELETE DELETETASK -> ${error.message}`);
    return next(error);
  }
}
module.exports = {
  createTask,
  getAllTask,
  updateTask,
  getByIdTask,
  excludeTask
};