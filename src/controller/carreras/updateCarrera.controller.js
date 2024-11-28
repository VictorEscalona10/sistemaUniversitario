import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const updateCarrera = async (req, res) => {
    const { id } = req.params;
    const { name, duracion } = req.body;

    try {
        const searchCarrera = await prisma.carrera.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        if (!searchCarrera) {
            return res.status(400).json({
                message: "Carrera not found",
            });
        }

        const carrera = await prisma.carrera.update({
            where: {
                id: parseInt(id),
            },
            data: {
                nombreCarrera: name,
                duracion,
            },
        });
        res.status(200).json({ message: "Carrera updated", carrera: carrera });
    } catch (error) {
        res.status(500).json({ message: "Internal server error"});
    }
};