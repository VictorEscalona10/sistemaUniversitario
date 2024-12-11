import { Router } from "express";
import { addCarrera } from "../../controller/carreras/addCarrera.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";
import { nameValidation, duracionValidation } from "../../middlewares/validation/fieldsValidation.js";
import { validate } from "../../middlewares/dataValidation.js";

export const router = Router();

let addCarreraValidation = [
    nameValidation,
    duracionValidation
]

router.post("/add", addCarreraValidation, validate, authenticateToken, addCarrera);