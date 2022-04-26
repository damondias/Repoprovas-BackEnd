import { Router } from "express";
import categoryController from "../controllers/categoryController.js";
import validateTokenMiddleware from "../middlewares/validateTokenMiddleware.js";

const categoryRouter = Router();

categoryRouter.use(validateTokenMiddleware);

categoryRouter.get("/categories", categoryController.findMany)
export default categoryRouter;