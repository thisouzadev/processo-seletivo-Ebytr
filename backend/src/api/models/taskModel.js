const connect = require('./connection');

const createTask = async (status, task, userId) => {
  const db = await connect();
  const { insertedId } = await db.collection('task').insertOne({
    status, task, userId,
  });
  return { newTask: {  status, task, userId, _id: insertedId} }
};

module.exports = {
  createTask,
};