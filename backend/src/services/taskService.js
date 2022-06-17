const Joi = require('@hapi/joi');

const errorConstructor = require('../utils/functions/errorHandling');
const { badRequest, notFound } = require('../utils/dictionary/statusCode');

const { createTask, findById } = require('../models/taskModel')

const schematask = Joi.object({
  status: Joi.string().required(),
  task: Joi.string().required(),
});
const idSchema = Joi.string().length(24);

const TaskCreate = async (status, task) => {
  const { error } = schematask.validate({
    status, task,
  });

  if (error) throw errorConstructor(badRequest, 'Invalid entries. Try again.');
  const id = await createTask(status, task);
  return id;
};

const findByIdOneTask = async (id) => {
  const { error } = idSchema.validate(id);
  if (error) throw errorConstructor(notFound, 'task not found');
  const product = await findById(id);
  return product;
};

module.exports = {
  TaskCreate,
  findByIdOneTask,
};