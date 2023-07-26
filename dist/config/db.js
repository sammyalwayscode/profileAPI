"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MONGODB_URI = "mongodb://127.0.0.1:27017/profileAPI";
const ATLAS_URI = "mongodb+srv://W8PypVqIRJXDReMh:W8PypVqIRJXDReMh@cluster0.1nq2x.mongodb.net/testProfile?retryWrites=true&w=majority";
const dbConfig = () => {
    mongoose_1.default.connect(ATLAS_URI);
    mongoose_1.default.connection
        .on("open", () => {
        console.log("Database Connected 🔥🔥🔥");
    })
        .once("error", () => {
        console.log("Error Connecting to database");
    });
};
exports.default = dbConfig;
