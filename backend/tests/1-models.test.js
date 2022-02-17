const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { getConnection } = require('./utils/mongoMockConnection');
const { ObjectId } = require('mongodb');

const mongoConnection = require('../src/models/connection');
const userModel = require('../src/models/usersModel');
const taskModel = require('../src/models/taskModel');

describe('User model tests', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  /* Restauraremos a função `connect` original após os testes. */
  after(() => {
    MongoClient.connect.restore();
  });

  describe('when it is successfully entered', () => {
    it('user: returns an object', async () => {
      const response = await userModel.create('thiago', 'thiago@gmail.com', 'senha123456');

      expect(response).to.be.a('object');
    });

    it('there must be a user!', async () => {
      const result = await userModel.create('thiago', 'thiago@gmail.com', 'senha123456');
      expect(result).to.have.property('user')
    });

  });
});

describe('Task model tests', () => {
  let connectionMock;

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  /* Restauraremos a função `connect` original após os testes. */
  after(() => {
    MongoClient.connect.restore();
  });

  describe('when it is successfully entered', () => {
    it('task: returns an object', async () => {
      const response = await taskModel.createTask('pendente', 'fazer o almoço', '620c08b82116bea2ba998b94');

      expect(response).to.be.a('object');

    });
    it('registered  newTask!', async () => {
      const response = await taskModel.createTask('pendente', 'fazer o almoço', '620c08b82116bea2ba998b94');
console.log(response);
      expect(response).to.have.property('newTask');
    });
  })

});

// {
//   user: {
//     name: 'thiago',
//     email: 'thiago@gmail.com',
//     role: 'user',
//     _id: 620e4571bf8cbe5df284bdcf
//   }
// }