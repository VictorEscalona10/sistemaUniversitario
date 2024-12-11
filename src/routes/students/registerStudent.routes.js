import { Router } from "express";
import { registerStudent } from "../../controller/students/registerStudent.controller.js";
import { nameValidation, lastNameValidation, identificationValidation, idCarreraValidation } from "../../middlewares/validation/fieldsValidation.js";
import { validate } from "../../middlewares/dataValidation.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";

export const router = Router();

let registerStudentValidation = [
    nameValidation,
    lastNameValidation,
    identificationValidation,
    idCarreraValidation
]

router.post("/register", authenticateToken, registerStudentValidation, validate, registerStudent);