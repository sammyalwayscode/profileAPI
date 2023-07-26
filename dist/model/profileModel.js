"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const profileSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
    },
    email: {
        type: String,
        required: [true, "Please enter your Email"],
        lowercase: true,
        trim: true,
        unique: true,
    },
    age: {
        type: Number,
    },
    bio: {
        type: String,
    },
}, { timestamps: true });
const profileModel = (0, mongoose_1.model)("profile", profileSchema);
exports.default = profileModel;
