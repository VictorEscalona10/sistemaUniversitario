import { Router } from "express";
import { loginAdmin } from "../../controller/auth/loginAdmin.controller.js";

export const router = Router();

router.post("/login", loginAdmin);