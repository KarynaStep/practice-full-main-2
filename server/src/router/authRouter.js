const authRouter = require('express').Router();
const AuthController = require('../controllers/authController')

authRouter.post('/sign-up')
authRouter.post('/sign-in');
authRouter.post('/refresh');

module.exports = authRouter;