import {prisma} from "../../lib/prisma.js";
import bcrypt from "bcrypt";
import { SALT } from "../../config/config.js";

export const registerAdmin = async (req, res) => {
    const { name, lastName, email, password } = req.body;

    try {
        const searchAdmin = await prisma.administrador.findUnique({
            where: {
                email,
            },
        })

        if (searchAdmin) {
            return res.status(400).json({
                message: "Email already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, parseInt(SALT));

        const admin = await prisma.administrador.create({
            data: {
                nombre: name,
                apellido: lastName,
                email,
                password: hashedPassword,
            },
        });
        res.status(201).json({message: "Admin created", admin: admin});

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
}
