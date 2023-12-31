"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profileController_1 = require("../controller/profileController");
const router = (0, express_1.Router)();
router.get("/allprofile", profileController_1.getAllProfile);
router.get("/userprofile/:id", profileController_1.getOneProfile);
router.post("/newprofile", profileController_1.createProfile);
router.patch("/editprofile/:profileID", profileController_1.updateProfile);
router.delete("/removeprofile/:id", profileController_1.removeProfile);
exports.default = router;
