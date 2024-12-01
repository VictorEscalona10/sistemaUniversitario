import {prisma} from "../../lib/prisma.js";

export const getStudents = async (req, res) => {
    const students = await prisma.estudiante.findMany();
    return res.json(students);
};