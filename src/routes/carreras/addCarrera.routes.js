import { Router } from "express";
import { addCarrera } from "../../controller/carreras/addCarrera.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";

export const router = Router();

router.post("/add", authenticateToken, addCarrera);