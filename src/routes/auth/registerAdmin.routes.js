import { Router } from "express";
import { registerAdmin } from "../../controller/auth/registerAdmin.controller.js";

export const router = Router();

router.post("/register", registerAdmin)

