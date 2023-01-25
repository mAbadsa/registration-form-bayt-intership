"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controller_1 = require("../controller");
var validation_1 = require("../middleware/validation");
var User_1 = __importDefault(require("../models/User"));
var utils_1 = require("../utils");
function userRouter() {
    var router = (0, express_1.Router)();
    return router.post("/signup", (0, validation_1.signupValidation)({ boomify: utils_1.boomify }), (0, controller_1.signup)({ User: User_1.default, boomify: utils_1.boomify }));
}
exports.default = userRouter;
