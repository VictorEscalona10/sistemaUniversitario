import { Router } from "express";
import { updateCarrera } from "../../controller/carreras/updateCarrera.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";

export const router = Router();

router.put("/update/:id", authenticateToken, updateCarrera);