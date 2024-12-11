import { Router } from "express";
import { updateSubject } from "../../controller/subjects/updateSubject.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";
import { idValidation, nameValidation, anioValidation, idCarreraValidation } from "../../middlewares/validation/fieldsValidation.js";
import { validate } from "../../middlewares/dataValidation.js";

export const router = Router();

let updateSubjectValidation = [
    idValidation,
    nameValidation,
    anioValidation,
    idCarreraValidation
]

router.put("/update/:id",  updateSubjectValidation, validate, authenticateToken, updateSubject)