import {prisma} from "../../lib/prisma.js";

export const updateSubject = async (req, res) => {
    const { id } = req.params;
    const { name, anio, idCarrera } = req.body;

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

        const subject = await prisma.materia.update({
            where: {
                id: parseInt(id),
            },
            data: {
                nombreMateria: name,
                anio,
                carrera: { connect: { id: parseInt(idCarrera) } },
            },
        });
        res.status(200).json({ message: "Subject updated", subject: subject });
    } catch (error) {
        res.status(500).json({ message: "Internal server error"});
    }
};