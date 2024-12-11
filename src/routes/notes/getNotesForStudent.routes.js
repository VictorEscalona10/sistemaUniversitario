import { Router } from "express";
import { getNotesForStudent } from "../../controller/notes/getNotesForStudent.controller.js";
import { identificationValidation } from "../../middlewares/validation/fieldsValidation.js";
import { validate } from "../../middlewares/dataValidation.js";

export const router = Router();

router.post("/student", identificationValidation, validate, getNotesForStudent);