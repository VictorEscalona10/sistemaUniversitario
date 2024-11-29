import { prisma } from "../../lib/prisma.js";

export const getCarreras = async (req, res) => {
    const carreras = await prisma.carrera.findMany();
    return res.json(carreras);
};