import {prisma } from "../../lib/prisma.js";

export const getTeachers = async (req, res) => {
    const teachers = await prisma.profesor.findMany();
    return res.json(teachers);
};