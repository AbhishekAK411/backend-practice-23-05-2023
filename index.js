import morgan from "morgan";
import express from "express";
import router from "./Routes/userRoutes.js";

const app = express();

app.use(morgan('dev'));
app.use("/api/v1", router)

app.listen(3000);
