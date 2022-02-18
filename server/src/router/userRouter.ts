import * as express from 'express';
import userController from '../controller/userController';
import userMiddleware from '../middleware/userMiddleware';

const userRouter = express.Router()

userRouter.post('/registration', userController.registration);
userRouter.post('/login', userController.login);
userRouter.post('/findAUser', userController.findAUser)
userRouter.post('/updateUser', userController.updateUser);
userRouter.post('/addContact', userController.addContact);

userRouter.get('/authCheck', userMiddleware, userController.authCheck);
userRouter.get('/logout', userController.logout);

export default userRouter;