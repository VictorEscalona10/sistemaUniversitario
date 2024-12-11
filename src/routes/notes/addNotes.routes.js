import { Router } from "express";
import { addNotes } from "../../controller/notes/addNotes.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";
import { idEstudianteValidation, idMateriaValidation, semestreValidation, notaValidation } from "../../middlewares/validation/fieldsValidation.js";
import { validate } from "../../middlewares/dataValidation.js";

export const router = Router();

let addNotesValidation = [  
    idEstudianteValidation,
    idMateriaValidation,
    semestreValidation,
    notaValidation
]

router.post("/add", addNotesValidation, validate, authenticateToken, addNotes);