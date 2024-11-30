import { Router } from "express";
import { deleteStudent } from "../../controller/students/deleteStudent.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";

export const router = Router();

router.delete("/delete/:id", authenticateToken, deleteStudent);