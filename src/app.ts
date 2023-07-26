import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import api from "./api";
import { AppError, Httpcode } from "./utils/appError";

const appConfig = (app: any) => {
  app
    .use(express.json())
    .use(morgan("dev"))
    .use(cors({ origin: "*" }))
    // api endPoint
    .use("/api", api);
};

export default appConfig;
