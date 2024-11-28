import { Router } from "express";
import { deleteCarrera } from "../../controller/carreras/deleteCarrera.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";

export const router = Router();

router.delete("/delete/:id", authenticateToken, deleteCarrera);