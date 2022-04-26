import { Router } from "express";
import validateTokenMiddleware from "../middlewares/validateTokenMiddleware.js";
import testController from "../controllers/testController.js";

const testRouter =  Router();

testRouter.use(validateTokenMiddleware)

testRouter.get("/tests", testController.find)

export default testRouter