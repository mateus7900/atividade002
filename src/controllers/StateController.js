import { Router } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const StateController = Router();

StateController.post("/insert", async (req, res) => {
    const { nome, sigla } = req.body;

    const state = await prisma.estado.create({
        data: {
            nome,
            sigla
        }
    })

    res.status(200).json({ state })
});

StateController.get("/all", async (req, res) => {
    const states = await prisma.estado.findMany()

    res.status(200).json({ states })
})

export default StateController;