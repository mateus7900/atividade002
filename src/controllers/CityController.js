import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const CityController = Router();

CityController.post("/insert", async (req, res) => {
    const { nome, estadoId } = req.body;

    const cidade = await prisma.cidade.create({

        data: {
            nome,
            estado: {
                connect: {
                    id: estadoId
                }
            }
        }

    });

    res.status(200).json({ cidade })
})

CityController.get("/all", async (req, res) => {
    const cities = await prisma.cidade.findMany();

    res.status(200).json({ cities });
})

export default CityController;