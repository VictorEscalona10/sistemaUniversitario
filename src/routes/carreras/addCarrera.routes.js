import { Router } from "express";
import { addCarrera } from "../../controller/carreras/addCarrera.controller.js";

export const router = Router();

router.post("/add", addCarrera);