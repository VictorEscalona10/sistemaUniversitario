import {prisma} from "../../lib/prisma.js";

export const getSubject = async (req, res) => {
    try {
        const subjects = await prisma.materia.findMany();
        return res.json(subjects);
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message,
        });
    }
};