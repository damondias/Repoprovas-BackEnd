import express from 'express';
import categoryRouter from './categoryRouter.js';
import testRouter from './testRouter.js';
import userRouter from './userRouter.js';

const router = express.Router();

router.use(userRouter)
router.use(testRouter)
router.use(categoryRouter)

export default router;