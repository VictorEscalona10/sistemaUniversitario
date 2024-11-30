import { Router } from "express";
import { registerStudent } from "../../controller/students/registerStudent.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";

export const router = Router();

router.post("/register", authenticateToken, registerStudent);