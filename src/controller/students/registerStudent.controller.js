import { prisma } from "../../lib/prisma.js";

export const registerStudent = async (req, res) => {
  const { name, lastName, identification, idCarrera } = req.body;

  try {
    const searchStudent = await prisma.estudiante.findUnique({
      where: {
        numeroIdentificacion: parseInt(identification),
      },
    });

    if (searchStudent) {
      return res.status(400).json({
        message: "Student already exists",
      });
    }

    const searchCarrera = await prisma.carrera.findUnique({
      where: { id: parseInt(idCarrera) },
    });
    
    if (!searchCarrera) {
      return res.status(400).json({ message: "Career not found" });
    }

    const student = await prisma.estudiante.create({
      data: {
        nombre: name,
        apellido: lastName,
        numeroIdentificacion: parseInt(identification),
        carrera: { connect: { id: parseInt(idCarrera) } },
      },
    });
    res.status(201).json({
      message: "Student created successfully",
      student: student,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error"});
  }
};
