import { Router } from "express";
import { registerAdmin } from "../../controller/auth/registerAdmin.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";
import { nameValidation, lastNameValidation, emailValidation, passwordValidation } from "../../middlewares/validation/fieldsValidation.js";
import { validate } from "../../middlewares/dataValidation.js";

export const router = Router();

let registerAdminValidation = [
    nameValidation,
    lastNameValidation,
    emailValidation,
    passwordValidation
]

router.post("/register", registerAdminValidation, validate, authenticateToken, registerAdmin)

