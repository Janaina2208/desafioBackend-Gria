import { Request, Response } from "express";
import JobsSchema from "../schemas/jobsSchema";

class JobsController {
    public async index(req: Request, res: Response): Promise<Response> {
        const jobs = await JobsSchema.find();

        return res.status(200).json(jobs);
    }

    public async create(req: Request, res: Response): Promise<Response> {
        const job = await JobsSchema.create(req.body);

        return res.status(201).json(job);
    }

    public async getById(req: Request, res: Response) {
        const { id } = req.params;
        const jobId = await JobsSchema.findById(id);

        res.status(200).json(jobId);

    }

    public async updateById(req: Request, res: Response) {
        const { id } = req.params;
        const updateJob = await JobsSchema.findById(id);
        if (updateJob) {
          
            updateJob.nameCompany = req.body.nameCompany || updateJob.nameCompany
            updateJob.job = req.body.job || updateJob.job
            updateJob.levelSkills = req.body.levelSkills || updateJob.levelSkills
            updateJob.period = req.body.period || updateJob.period
            updateJob.local = req.body.local || updateJob.local
            updateJob.finalSubscription = req.body.finalSubscription || updateJob.finalSubscription
            updateJob.initialSubscription = req.body.initialSubscription || updateJob.initialSubscription
            updateJob.contract = req.body.contract || updateJob.contract
            updateJob.vacantJob = req.body.vacantJob ||updateJob.vacantJob
            updateJob.employeer = req.body.employeer ||updateJob.employeer
            updateJob.numberCandidates = req.body.numberCandidates ||updateJob.numberCandidates
            updateJob.occupationArea = req.body.occupationArea ||updateJob.occupationArea
            updateJob.description = req.body.description ||updateJob.description
            updateJob.technicalAbilities = req.body.technicalAbilities ||updateJob.technicalAbilities
            updateJob.behavioralAbilities = req.body.behavioralAbilities ||updateJob.behavioralAbilities
            updateJob.benefits = req.body.benefits ||updateJob.benefits
            updateJob.salary = req.body.salary ||updateJob.salary

            const saveJob = await updateJob.save();
            res.status(200).json({
                message: "Usuário atualizado com sucesso",
                saveJob
            })
        }

    }

    public async deleteById(req: Request, res: Response) {
        const { id } = req.params;
        const job = await JobsSchema.findById(id);

      
        await job.delete();
         res.status(200).json({ message: "Cadastro deletado com sucesso." })
    }
}


export default new JobsController();