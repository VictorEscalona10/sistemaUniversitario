import {Router} from "express";
import {getSubjectsCarrera} from "../../controller/carreras/getSubjectsCarrera.controller.js"
import {authenticateToken} from "../../middlewares/verifyJWT.js"
import {idValidation} from "../../middlewares/validation/fieldsValidation.js"
import {validate} from "../../middlewares/dataValidation.js"

export const router = Router();

let getSubjectsCarreraValidation = [
    idValidation
]

router.get("/:idCarrera", idValidation, validate, authenticateToken, getSubjectsCarrera);