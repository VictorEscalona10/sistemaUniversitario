import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCarreras = async (req, res) => {
    const carreras = await prisma.carrera.findMany();
    return res.json(carreras);
};