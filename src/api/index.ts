import { Router } from "express";
import homeRoute from "../router/home.route";

const router = Router();

router.get("/", homeRoute);

export default router;
