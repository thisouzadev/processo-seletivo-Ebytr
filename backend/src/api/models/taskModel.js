const connect = require('./connection');

const createTask = async (status, task, userId) => {
  const db = await connect();
  const { insertedId } = await db.collection('tasks').insertOne({
    status, task, userId,
  });
  return { newTask: {  status, task, userId, _id: insertedId} }
};

const findAll = async () => {
  const db = await connect();
  const task = await db.collection('tasks').find({}).toArray();
  return task;
};

module.exports = {
  createTask,
  findAll,
};