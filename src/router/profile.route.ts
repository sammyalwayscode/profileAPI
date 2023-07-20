import { Router } from "express";
import { getAllProfile } from "../controller/profileController";

const router = Router();

router.get("/allprofile", getAllProfile);

export default router;
