import { Router } from "express";
import { loginAdmin } from "../../controller/auth/loginAdmin.controller.js";
import { emailValidation, passwordValidation } from "../../middlewares/validation/fieldsValidation.js";
import { validate } from "../../middlewares/dataValidation.js";

export const router = Router();

let loginAdminValidation = [
    emailValidation,
    passwordValidation
]

router.post("/login", loginAdminValidation, validate, loginAdmin);