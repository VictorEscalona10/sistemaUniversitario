import {prisma} from "../../lib/prisma.js";

export const deleteStudent = async (req, res) => {
    const { id } = req.params;

    try {
        const searchStudent = await prisma.estudiante.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        if (!searchStudent) {
            return res.status(400).json({
                message: "Student not found",
            });
        }

        const student = await prisma.estudiante.delete({
            where: {
                id: parseInt(id),
            },
        });
        res.status(200).json({ message: "Student deleted", student: student });
    } catch (error) {
        res.status(500).json({ message: "Internal server error"});
    }
};