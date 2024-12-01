import { prisma } from "../../lib/prisma.js";

export const addNotes = async (req, res) => {
  const { idEstudiante, idMateria, semestre, nota } = req.body;

  try {
    const estudiante = await prisma.estudiante.findUnique({
      where: { id: idEstudiante },
    });

    if (!estudiante) {
      return res.status(404).json({ message: "Student not found" });
    }

    const materia = await prisma.materia.findUnique({
      where: { id: idMateria },
    });

    if (!materia) {
      return res.status(404).json({ message: "Subject not found" });
    }

    if (materia.idCarrera !== estudiante.idCarrera) {
      return res.status(400).json({ message: "Subject does not belong to the student's career" });
    }

    const nuevaNota = await prisma.nota.create({
      data: {
        estudiante: { connect: { id: idEstudiante } },
        materia: { connect: { id: idMateria } },
        semestre,
        nota,
      },
    });

    res.status(201).json({ message: "Grade added successfully", nota: nuevaNota });
  } catch (error) {
    res.status(500).json({ message: "Internal server error"});
  }
};
