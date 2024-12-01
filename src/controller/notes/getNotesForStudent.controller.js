import { prisma } from "../../lib/prisma.js";

export const getNotesForStudent = async (req, res) => {
  const { numeroIdentificacion } = req.body;

  try {
    const estudiante = await prisma.estudiante.findUnique({
      where: { numeroIdentificacion: parseInt(numeroIdentificacion, 10) },
      include: {
        carrera: true, 
        notas: {
          include: {
            materia: true, 
          },
        },
      },
    });

    if (!estudiante) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      estudiante: {
        id: estudiante.id,
        nombre: estudiante.nombre,
        apellido: estudiante.apellido,
        carrera: estudiante.carrera,
        notas: estudiante.notas
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};
