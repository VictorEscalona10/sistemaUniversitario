import { Router } from "express";
import { getStudentsByCarreraAndAnio } from "../../controller/students/getStudentsByCarreraAndAnio.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";
import { idCarreraValidation, anioValidation } from "../../middlewares/validation/fieldsValidation.js";
import { validate } from "../../middlewares/dataValidation.js";

export const router = Router();

let getStudentsByCarreraAndAnioValidation = [
    idCarreraValidation,
    anioValidation
]

router.get("/for/carrera", getStudentsByCarreraAndAnioValidation, validate, authenticateToken, getStudentsByCarreraAndAnio);