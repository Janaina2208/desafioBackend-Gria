import { Router } from "express";
import JobsController from "../controller/jobsController";

const router = Router();

router.get("/all", JobsController.index);
router.get("/all/:id", JobsController.getById);
router.post("/create", JobsController.create);
router.put("/update/:id", JobsController.updateById);
router.delete("/delete/:id", JobsController.deleteById);


export default router;