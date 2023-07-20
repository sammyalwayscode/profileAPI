import express, { Application, Request, Response } from "express";
import appConfig from "./app";

const PORT: number = 3033;
const app: Application = express();

appConfig(app);

app.listen(PORT, () => {
  console.log("Server Up and Ready...✌️✌️✌️");
});
