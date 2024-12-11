import { Router } from "express";
import { registerTeacher } from "../../controller/teachers/registerTeacher.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";
import { nameValidation, lastNameValidation, identificationValidation } from "../../middlewares/validation/fieldsValidation.js";

export const router = Router(); 

let registerTeacherValidation = [
    nameValidation,
    lastNameValidation,
    identificationValidation
]

router.post("/register", registerTeacherValidation, authenticateToken, registerTeacher);