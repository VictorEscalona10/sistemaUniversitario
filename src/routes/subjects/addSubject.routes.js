import { Router } from "express";
import { addSubject } from "../../controller/subjects/addSubject.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";

export const router = Router();

router.post("/add", authenticateToken, addSubject);
