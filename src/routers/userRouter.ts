import { Router } from 'express'
import validateSchemaMiddleware  from '../middlewares/validateSchemaMiddleware.js'
import userSchema from '../schemas/userSchema.js'
import userControler from '../controllers/userControler.js' 

const userRouter = Router()

userRouter.post('/sign-up', validateSchemaMiddleware(userSchema), userControler.signIn)
userRouter.post('/sign-in', validateSchemaMiddleware(userSchema), userControler.signUp)
userRouter.post('/sign-out',)

export default userRouter;