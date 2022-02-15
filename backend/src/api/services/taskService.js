const Joi = require('@hapi/joi');

const errorConstructor = require('../utils/functions/errorHandling');
const { badRequest, notFound } = require('../utils/dictionary/statusCode');

const { createTask } = require('../models/taskModel')

const schematask = Joi.object({
  status: Joi.string().required(),
  task: Joi.string().required(),
});

const TaskCreate = async (status, task, userId) => {
  const { error } = schematask.validate({
    status, task,
  });

  if (error) throw errorConstructor(badRequest, 'Invalid entries. Try again.');
  const id = await createTask(status, task, userId);
  return id;
};

module.exports = {
  TaskCreate
};