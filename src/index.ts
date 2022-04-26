import cors from "cors";
import 'express-async-errors';
import express, { json } from "express";
import dotenv from "dotenv";
import router from "./routers/index.js";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandlerMiddleware);

const port = +process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Running on port ${port}.`);
});

export default app;