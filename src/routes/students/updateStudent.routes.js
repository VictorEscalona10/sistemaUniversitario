import { Router } from "express";
import { updateStudent } from "../../controller/students/updateStudent.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";

export const router = Router();

router.put("/update/:id", authenticateToken, updateStudent);