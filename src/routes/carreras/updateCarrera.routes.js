import { Router } from "express";
import { updateCarrera } from "../../controller/carreras/updateCarrera.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";
import {idValidation, nameValidation, duracionValidation} from "../../middlewares/validation/fieldsValidation.js";

export const router = Router();

let updateCarreraValidation = [
    idValidation,
    nameValidation,
    duracionValidation
]

router.put("/update/:id", updateCarreraValidation, authenticateToken, updateCarrera);
