import * as express from 'express';
import roomController from '../controller/roomController';

const roomRouter = express.Router()

roomRouter.post('/createRoom', roomController.createRoom);
roomRouter.post('/getRoom', roomController.getRoom);

export default roomRouter;