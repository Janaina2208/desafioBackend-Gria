"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jobsController_1 = __importDefault(require("../controller/jobsController"));
const router = (0, express_1.Router)();
router.get("/all", jobsController_1.default.index);
router.get("/all/:id", jobsController_1.default.getById);
router.post("/create", jobsController_1.default.create);
router.put("/update/:id", jobsController_1.default.updateById);
router.delete("/delete/:id", jobsController_1.default.deleteById);
exports.default = router;
