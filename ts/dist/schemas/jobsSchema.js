"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const JobsSchema = new mongoose_1.Schema({
    nameCompany: String,
    job: String,
    levelSkills: String,
    period: String,
    local: Object,
    finalSubscription: String,
    initialSubscription: String,
    contract: String,
    vacantJob: Number,
    employeer: Number,
    numberCandidates: Number,
    occupationArea: String,
    description: String,
    technicalAbilities: Array,
    behavioralAbilities: Array,
    benefits: Array,
    salary: String
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Job", JobsSchema);
