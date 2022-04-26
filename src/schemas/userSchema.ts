import Joi from "joi";
import { CreateUserData } from "../services/userService.js";

const userSchema = Joi.object<CreateUserData>({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export default userSchema