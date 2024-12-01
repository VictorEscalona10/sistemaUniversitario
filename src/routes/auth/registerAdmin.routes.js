import { Router } from "express";
import { registerAdmin } from "../../controller/auth/registerAdmin.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";

export const router = Router();

router.post("/register", authenticateToken, registerAdmin)

