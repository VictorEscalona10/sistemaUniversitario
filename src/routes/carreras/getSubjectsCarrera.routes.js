import {Router} from "express";
import {getSubjectsCarrera} from "../../controller/carreras/getSubjectsCarrera.controller.js"

export const router = Router();

router.get("/:idCarrera", getSubjectsCarrera);