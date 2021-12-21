import { Schema, model } from "mongoose";



const JobsSchema = new Schema({
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
}, {timestamps: true})


export default model("Job", JobsSchema);