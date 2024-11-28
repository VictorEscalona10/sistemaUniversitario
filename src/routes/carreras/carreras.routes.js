import { Router } from "express";
import { getCarreras } from "../../controller/carreras/carreras.controller.js";

export const router = Router();

router.get("/", getCarreras);