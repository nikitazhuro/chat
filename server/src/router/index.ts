import * as express from 'express'
import userRouter from './userRouter';
import roomRouter from './roomRouter';

const router = express.Router()

router.use('/user', userRouter)
router.use('/room', roomRouter)

export default router;