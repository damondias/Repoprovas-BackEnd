import express from 'express';
import testRouter from './testRouter.js';
import userRouter from './userRouter.js';

const router = express.Router();

router.use(userRouter)
router.use(testRouter)

export default router;