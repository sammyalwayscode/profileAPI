import { Router } from "express";
import homeRoute from "../router/home.route";
import profileRoute from "../router/profile.route";

const router = Router();

router.get("/", homeRoute);
router.get("/profile", profileRoute);

export default router;
