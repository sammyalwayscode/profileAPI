import express, { Application, Request, Response } from "express";
import appConfig from "./app";
import dbConfig from "./config/db";

const PORT: number = 3033;
const app: Application = express();
// initalize app
appConfig(app);
// initilize database
dbConfig();

app.listen(PORT, () => {
  console.log("Server Up and Ready...✌️✌️✌️");
});
