import { prisma } from "../../lib/prisma.js";

export const addSubject = async (req, res) => {
  const { name, anio, idCarrera } = req.body;

  try {

    const searchSubject = await prisma.materia.findFirst({
      where: {
        nombreMateria: name,
        anio,
        carrera: { id: parseInt(idCarrera) },
      },
    });

    if (searchSubject) {
      return res.status(400).json({
        message: "Subject already exists",
      });
    }

    const subject = await prisma.materia.create({
      data: {
        nombreMateria: name,
        anio,
        carrera: { connect: { id: parseInt(idCarrera) } },
      },
    });

    return res.status(201).json({
      message: "Subject created successfully",
      subject,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
