import { Router } from "express";
import { getStudentsByCarreraAndAnio } from "../../controller/students/getStudentsByCarreraAndAnio.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";

export const router = Router();

router.get("/for/carrera", authenticateToken, getStudentsByCarreraAndAnio);