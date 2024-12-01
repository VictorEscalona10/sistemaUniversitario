import {prisma} from "../../lib/prisma.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config/config.js";
import bcrypt from "bcrypt";

export const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await prisma.administrador.findUnique({
            where: {
                email,
            },
        });

        if (!admin) {
            return res.status(400).json({
                message: "Email not found",
            });
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            admin.password
        );

        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid password",
            });
        }

        const token = jwt.sign({ id: admin.id }, JWT_SECRET, {
            expiresIn: "1h",
        });

        res.cookie("authToken", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            expires: new Date(Date.now() + 3600000),
        });

        return res.status(200).json({
            message: "Login successful",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error", 
            error: error.message
        });
    }
}