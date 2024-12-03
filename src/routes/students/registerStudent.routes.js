import { Router } from "express";
import { registerStudent } from "../../controller/students/registerStudent.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";
import { validateStudent } from "../../middlewares/dataValidation.js";
import { validate } from "../../middlewares/dataValidation.js";

export const router = Router();

router.post("/register", authenticateToken, validateStudent, validate, registerStudent);