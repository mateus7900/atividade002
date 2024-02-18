import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const BloodTypeController = Router();

BloodTypeController.post("/insert", async (req, res) => {
    const { tipo, fator } = req.body

    const bloodType = await prisma.tipo_Sanguineo.create({
        data: {
            tipo,
            fator
        }
    })

    res.status(200).json({ bloodType })
})

BloodTypeController.put("/", async (req, res) => {
    const { id, tipo, fator } = req.body

    const updatedBloodType = await prisma.tipo_Sanguineo.update({
        where: { id },
        data: {
            tipo,
            fator
        }
    })

    res.status(200).json({ updatedBloodType })
})

BloodTypeController.delete("/:id", async (req, res) => {
    const id = parseInt(req.params['id'])

    const bloodType = await prisma.tipo_Sanguineo.delete({
        where: { id }
    })

    res.status(200).json({ bloodType })
})

BloodTypeController.get("/find-all", async (req, res) => {
    const bloodTypes = await prisma.tipo_Sanguineo.findMany()

    res.status(200).json({ bloodTypes })
})

BloodTypeController.get("/find-by-id/:id", async (req, res) => {

    const id = parseInt(req.params['id'])

    const bloodType = await prisma.tipo_Sanguineo.findUnique({
        where: { id }
    })

    res.status(200).json({ bloodType })
})

export default BloodTypeController;