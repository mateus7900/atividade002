import { Router } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
const PeopleController = Router()


PeopleController.post("/", async (req, res) => {
    const { nome, rua, numero, complemento, documento, cidadeId, tipoId } = req.body
    console.log(req.body)

    const people = await prisma.pessoa.create({
        data: {
            nome,
            rua,
            numero, 
            complemento,
            documento,
            cidade: {
                connect: { id: cidadeId}
            },
            tipo: {
                connect: { id: tipoId}
            }
        }
    })

    res.status(200).json({ people })
})

PeopleController.put("/", async (req, res) => {
    const { id, nome, rua, numero, complemento, documento, cidadeId, tipoId } = req.body

    const updatedPeople = await prisma.pessoa.update({
        where: { id },
        data: {
            nome,
            rua,
            numero, 
            complemento,
            documento,
            cidade: {
                connect: { id: cidadeId}
            },
            tipo_sanquineo: {
                connect: { id: tipoId}
            }
        }
    })

    res.status(200).json({ updatedPeople })
})

PeopleController.post("/delete", async (req, res) => {
    const { id } = req.body


    const people = await prisma.pessoa.delete({
        where: { id }
    })

    res.status(200).json({ people })
})

PeopleController.get("/find-all", async (req, res) => {
    const peoples = await prisma.pessoa.findMany()

    res.status(200).json({ peoples })
})

PeopleController.post("/find-by-id", async (req, res) => {

    const { id } = req.body

    const people = await prisma.pessoa.findUnique({
        where: { id }
    })

    res.status(200).json({ people })
})

PeopleController.post("/find-by-name", async (req, res) => {

    const { nome } = req.body

    const people = await prisma.pessoa.findMany({
        where: { nome }
    })

    res.status(200).json({ people })
})


export default PeopleController;