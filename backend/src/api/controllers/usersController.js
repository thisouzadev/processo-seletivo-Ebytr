const {
  createUsers,
  loginUserValidacao,
} = require('../services/userServices');
const {
  created, success,
} = require('../utils/dictionary/statusCode');

const { createToken } = require('../middlewares/auth')


const addUsers = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const result = await createUsers(name, email, password);
    return res.status(created).json(result);
  } catch (error) {
    console.log(`POST CREATEUSERS -> ${error.message}`);
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const searchingAndLogin = await loginUserValidacao(email, password);
    const token = createToken({ payload: searchingAndLogin });
    return res.status(success).json({ token });
  } catch (error) {
    console.log(`POST LOGIN -> ${error.message}`);
    return next(error);
  }
};

module.exports = {
  addUsers,
  login,
};