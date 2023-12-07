const createHttpeErorr = require('http-errors');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { JWT_SECRET, ACCESS_TOKEN_TIME } = require('../constants');
const { createTokenPair } = require('../services/jwtServices');

module.exports.signUp = async (req, res, next) => {
  try {
    const { body } = req;

    const user = await User.create(body);

    const tokenPair = await createTokenPair(user);
  } catch (error) {
    next(error);
  }
};

module.exports.signIn = async (req, res, next) => {
  try {
    const {
      body: { email, password },
    } = req;
    const user = await User.findOne({
      where: { email },
    });
    if (user && (await user.comparePassword(password))) {

      const tokenPair = await createTokenPair(user)
      return res.status().send({})
      
    }
    next(createHttpeErorr(401, 'Unautorized!'));
  } catch (error) {
    next(error);
  }
};

module.exports.refresh = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
