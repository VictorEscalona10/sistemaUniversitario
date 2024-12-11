import { Router } from "express";
import { addSubject } from "../../controller/subjects/addSubject.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";
import { nameValidation, anioValidation, idCarreraValidation } from "../../middlewares/validation/fieldsValidation.js";
import { validate } from "../../middlewares/dataValidation.js";

export const router = Router();

let addSubjectValidation = [
    nameValidation,
    anioValidation,
    idCarreraValidation
]

router.post("/add", addSubjectValidation, validate, authenticateToken, addSubject);

