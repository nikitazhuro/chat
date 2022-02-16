import * as express from 'express';
import userController from '../controller/userController';
import userMiddleware from '../middleware/userMiddleware';

const userRouter = express.Router()

userRouter.post('/registration', userController.registration);
userRouter.post('/login', userController.login);
userRouter.get('/authCheck', userMiddleware, userController.authCheck);
userRouter.get('/logout', userController.logout);
userRouter.post('/updateUser', userController.updateUser);

export default userRouter;