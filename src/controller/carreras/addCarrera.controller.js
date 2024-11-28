import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addCarrera = async (req, res) => {
    const { name } = req.body;

    try {

        const searchCarrera = await prisma.carrera.findUnique({
            where: {
                name,
            },
        })

        if (searchCarrera) {
            return res.status(400).json({
                message: "Carrera already exists",
            });
        }

        const carrera = await prisma.carrera.create({
            data: {
                nombre: name,
            },
        });

        return res.status(201).json({
            message: "Carrera created successfully",
            carrera,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error creating carrera",
        });
    }
};