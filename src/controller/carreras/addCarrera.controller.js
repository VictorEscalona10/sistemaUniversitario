import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addCarrera = async (req, res) => {
    const { name, duracion } = req.body;

    try {

        const searchCarrera = await prisma.carrera.findUnique({
            where: {
                nombreCarrera: name,
            },
        });

        if (searchCarrera) {
            return res.status(400).json({
                message: "Carrera already exists",
            });
        }

        const carrera = await prisma.carrera.create({
            data: {
                nombreCarrera: name,
                duracion,
            },
        });
        res.status(201).json({ message: "Carrera created", carrera: carrera });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};