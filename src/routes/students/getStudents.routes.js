import { Router } from "express";
import { getStudents } from "../../controller/students/getStudents.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";

export const router = Router();

router.get("/", authenticateToken, getStudents);