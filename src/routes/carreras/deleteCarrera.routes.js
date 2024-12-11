import { Router } from "express";
import { deleteCarrera } from "../../controller/carreras/deleteCarrera.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";
import { idValidation } from "../../middlewares/validation/fieldsValidation.js";
import { validate } from "../../middlewares/dataValidation.js";

export const router = Router();

let deleteCarreraValidation = [
    idValidation
]

router.delete("/delete/:id", deleteCarreraValidation, validate, authenticateToken, deleteCarrera);