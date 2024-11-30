import {prisma} from "../../lib/prisma.js";

export const deleteSubject = async (req, res) => {
    const { id } = req.params;

    try {
        const searchSubject = await prisma.materia.findUnique({
            where: {
                id: parseInt(id),
            },
        });

        if (!searchSubject) {
            return res.status(400).json({
                message: "Subject not found",
            });
        }

        const subject = await prisma.materia.delete({
            where: {
                id: parseInt(id),
            },
        });
        res.status(200).json({ message: "Subject deleted", subject: subject });
    } catch (error) {
        res.status(500).json({ message: "Internal server error"});
    }
}