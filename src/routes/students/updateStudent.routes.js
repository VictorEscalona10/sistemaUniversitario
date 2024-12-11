import { Router } from "express";
import { updateStudent } from "../../controller/students/updateStudent.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";
import { idValidation, nameValidation, lastNameValidation, identificationValidation, anioValidation, idCarreraValidation } from "../../middlewares/validation/fieldsValidation.js";
import { validate } from "../../middlewares/dataValidation.js";

export const router = Router();

let updateStudentValidation = [ 
    idValidation,
    nameValidation,
    lastNameValidation,
    identificationValidation,
    anioValidation,
    idCarreraValidation 
]

router.put("/update/:id", updateStudentValidation, validate, authenticateToken, updateStudent);
