"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("./app"));
const db_1 = __importDefault(require("./config/db"));
const PORT = 3033;
const app = (0, express_1.default)();
// initalize app
(0, app_1.default)(app);
// initilize database
(0, db_1.default)();
app.listen(PORT, () => {
    console.log("Server Up and Ready...✌️✌️✌️");
});
