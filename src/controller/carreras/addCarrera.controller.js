import {prisma} from "../../lib/prisma.js";

export const addCarrera = async (req, res) => {
    const { name, duracion } = req.body;

    try {

        const searchCarrera = await prisma.carrera.findUnique({
            where: {
                nombreCarrera: name,
            },
        })

        if (searchCarrera) {
            return res.status(400).json({
                message: "Carrera already exists",
            });
        }

        const carrera = await prisma.carrera.create({
            data: {
                nombreCarrera: name,
                duracion,
            },
        });

        return res.status(201).json({
            message: "Carrera created successfully",
            carrera,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error creating carrera"
        });
    }
};