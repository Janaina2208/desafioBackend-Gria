"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.status(200).send({
        title: "Crud em typescript",
        version: "1.0.0",
        message: "ESPERO QUE SAIA!"
    });
});
exports.default = router;
