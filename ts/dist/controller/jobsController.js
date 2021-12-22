"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jobsSchema_1 = __importDefault(require("../schemas/jobsSchema"));
class JobsController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const jobs = yield jobsSchema_1.default.find();
            return res.status(200).json(jobs);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const job = yield jobsSchema_1.default.create(req.body);
            return res.status(201).json(job);
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const jobId = yield jobsSchema_1.default.findById(id);
            res.status(200).json(jobId);
        });
    }
    updateById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const updateJob = yield jobsSchema_1.default.findById(id);
            if (updateJob) {
                updateJob.nameCompany = req.body.nameCompany || updateJob.nameCompany;
                updateJob.job = req.body.job || updateJob.job;
                updateJob.levelSkills = req.body.levelSkills || updateJob.levelSkills;
                updateJob.period = req.body.period || updateJob.period;
                updateJob.local = req.body.local || updateJob.local;
                updateJob.finalSubscription = req.body.finalSubscription || updateJob.finalSubscription;
                updateJob.initialSubscription = req.body.initialSubscription || updateJob.initialSubscription;
                updateJob.contract = req.body.contract || updateJob.contract;
                updateJob.vacantJob = req.body.vacantJob || updateJob.vacantJob;
                updateJob.employeer = req.body.employeer || updateJob.employeer;
                updateJob.numberCandidates = req.body.numberCandidates || updateJob.numberCandidates;
                updateJob.occupationArea = req.body.occupationArea || updateJob.occupationArea;
                updateJob.description = req.body.description || updateJob.description;
                updateJob.technicalAbilities = req.body.technicalAbilities || updateJob.technicalAbilities;
                updateJob.behavioralAbilities = req.body.behavioralAbilities || updateJob.behavioralAbilities;
                updateJob.benefits = req.body.benefits || updateJob.benefits;
                updateJob.salary = req.body.salary || updateJob.salary;
                const saveJob = yield updateJob.save();
                res.status(200).json({
                    message: "Usuário atualizado com sucesso",
                    saveJob
                });
            }
        });
    }
    deleteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const job = yield jobsSchema_1.default.findById(id);
            yield job.delete();
            res.status(200).json({ message: "Cadastro deletado com sucesso." });
        });
    }
}
exports.default = new JobsController();
