import {prisma} from "../../lib/prisma.js";

export const registerTeacher = async (req, res) => {
    const { name, lastName, identification } = req.body;
    try {

        const searchTeacher = await prisma.profesor.findUnique({
            where: {
                numeroIdentificacion: parseInt(identification),
            },
        });

        if (searchTeacher) {
            return res.status(400).json({
                message: "Teacher already exists",
            });
        }

        const teacher = await prisma.profesor.create({
            data: {
                nombre: name,
                apellido: lastName,
                numeroIdentificacion: parseInt(identification),
            },
        });
        res.status(201).json({ message: "Teacher created successfully", teacher: teacher });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};