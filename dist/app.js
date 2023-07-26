"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const api_1 = __importDefault(require("./api"));
const appConfig = (app) => {
    app
        .use(express_1.default.json())
        .use((0, morgan_1.default)("dev"))
        .use((0, cors_1.default)({ origin: "*" }))
        // api endPoint
        .use("/api", api_1.default);
};
exports.default = appConfig;
