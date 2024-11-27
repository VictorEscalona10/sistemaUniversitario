import { PrismaClient } from "@prisma/client";
import { Router } from "express";
import bcrypt from "bcrypt";
import { SALT } from "../../config/config.js";

export const router = Router();
const prisma = new PrismaClient();

router.post("/register", async (req, res) => {
    const { name, lastName, email, password } = req.body;

    try {
        const search = await prisma.administrador.findUnique({
            where: {
                email,
            },
        })

        if (search) {
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
});
