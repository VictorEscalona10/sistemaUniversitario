import { prisma } from "../../lib/prisma.js";

export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, lastName, identification, anio, idCarrera } = req.body;

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

    const student = await prisma.estudiante.update({
      where: {
        id: parseInt(id),
      },
      data: {
        nombre: name,
        apellido: lastName,
        numeroIdentificacion: parseInt(identification),
        anio,
        carrera: { connect: { id: parseInt(idCarrera) } },
      },
    });
    res.status(200).json({ message: "Student updated", student: student });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
