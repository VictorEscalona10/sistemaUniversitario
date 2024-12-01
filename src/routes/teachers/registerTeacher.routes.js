import { Router } from "express";
import { registerTeacher } from "../../controller/teachers/registerTeacher.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";

export const router = Router(); 

router.post("/register", authenticateToken, registerTeacher);