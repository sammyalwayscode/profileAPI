import { Router } from "express";
import {
  createProfile,
  getAllProfile,
  getOneProfile,
  removeProfile,
  updateProfile,
} from "../controller/profileController";

const router = Router();

router.get("/allprofile", getAllProfile);
router.get("/userprofile/:id", getOneProfile);
router.post("/newprofile", createProfile);
router.patch("/editprofile/:profileID", updateProfile);
router.delete("/removeprofile/:id", removeProfile);

export default router;
