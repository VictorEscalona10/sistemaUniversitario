import {prisma} from "../../lib/prisma.js";

export const getSubjectsCarrera = async (req, res) => {
    const { idCarrera } = req.params;
    try {
      const materias = await prisma.materia.findMany({
        where: { idCarrera: parseInt(idCarrera, 10) },
        include: { carrera: true },
      });
      res.status(200).json(materias);
    } catch (error) {
      res.status(400).json({ message: "Error al obtener materias" })
    }
  };