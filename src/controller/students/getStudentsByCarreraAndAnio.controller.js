import { prisma } from "../../lib/prisma.js";

export const getStudentsByCarreraAndAnio = async (req, res) => {
  const { idCarrera, anio } = req.body;

  try {
    const parsedIdCarrera = parseInt(idCarrera, 10);
    const parsedAnio = parseInt(anio, 10);

    if (isNaN(parsedIdCarrera) || isNaN(parsedAnio)) {
      return res.status(400).json({ message: "Invalid idCarrera or anio format." });
    }

    const carrera = await prisma.carrera.findUnique({
      where: { id: parsedIdCarrera },
      select: { id: true, nombreCarrera: true },
    });

    if (!carrera) {
      return res.status(404).json({ message: "Career not found" });
    }

    const estudiantes = await prisma.estudiante.findMany({
      where: {
        idCarrera: carrera.id,
        anio: parsedAnio,
      },
    });

    res.status(200).json({
      carrera: carrera.nombreCarrera,
      anio: parsedAnio,
      estudiantes: estudiantes,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error"});
  }
};
