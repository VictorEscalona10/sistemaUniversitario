import { Router } from "express";
import { getCarreras } from "../../controller/carreras/getCarreras.controller.js";

export const router = Router();

router.get("/", getCarreras);