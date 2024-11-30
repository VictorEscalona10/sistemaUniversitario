import { Router } from "express";
import { getCarreras } from "../../controller/carreras/carrera.controller.js";

export const router = Router();

router.get("/", getCarreras);