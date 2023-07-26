"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_route_1 = __importDefault(require("../router/home.route"));
const profile_route_1 = __importDefault(require("../router/profile.route"));
const router = (0, express_1.Router)();
router.get("/", home_route_1.default);
router.use("/profile", profile_route_1.default);
exports.default = router;
