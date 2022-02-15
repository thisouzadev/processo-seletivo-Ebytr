const { ObjectId } = require('mongodb');
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

const update = async (id, task) => {
  const db = await connect();
  const result = await db.collection('tasks').updateOne(
    { _id: ObjectId(id) }, { $set: task },
  );
  return result;
};
module.exports = {
  createTask,
  findAll,
  update,
};