import mongoose from "mongoose";
import express from "express";

import userRouter from "./route/userRouter.js";

("use strict");

mongoose
  .connect("mongodb+srv://merciof:32722212@cluster0.jsnbu.mongodb.net/base2")
  .then(console.log("Conectado ao Mongo"))
  .catch((erro) => console.log(erro.message));

const app = express();

app.use(express.json());

app.use("/api", userRouter);

app.listen(8080, () => {
  console.log(`App listening on port 8080`);
});

export default app;
