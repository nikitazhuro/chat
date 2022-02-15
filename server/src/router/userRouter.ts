import * as express from 'express';
import userController from '../controller/userController';

const userRouter = express.Router()

userRouter.post('/registration', userController.registration);

export default userRouter;