import { Router } from "express";
import { deleteSubject } from "../../controller/subjects/deleteSubject.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";

export const router = Router();

router.delete("/delete/:id", authenticateToken, deleteSubject)