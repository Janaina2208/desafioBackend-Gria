import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.status(200).send({
        title: "Crud em typescript",
        version: "1.0.0",
        message: "CRUD que faz referência à página de empregos da GRIA."
    })
});

export default router;