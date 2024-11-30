import { Router } from "express";
import { updateSubject } from "../../controller/subjects/updateSubject.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";

export const router = Router();

router.put("/update/:id", authenticateToken, updateSubject)