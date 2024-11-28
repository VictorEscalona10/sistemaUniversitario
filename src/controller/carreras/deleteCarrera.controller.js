import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deleteCarrera = async (req, res) => {
    const { id } = req.params;

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

        const carrera = await prisma.carrera.delete({
            where: {
                id: parseInt(id),
            },
        });
        res.status(200).json({ message: "Carrera deleted", carrera: carrera });
    } catch (error) {
        res.status(500).json({ message: "Internal server error"});
    }
};