import * as express from 'express';
import userController from '../controller/userController';

const userRouter = express.Router()

interface IUserController {}

userRouter.post('/registration', userController.registration);
userRouter.post('login');

export default userRouter;