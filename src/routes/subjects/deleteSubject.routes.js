import { Router } from "express";
import { deleteSubject } from "../../controller/subjects/deleteSubject.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";
import { idValidation } from "../../middlewares/validation/fieldsValidation.js";
import { validate } from "../../middlewares/dataValidation.js";

export const router = Router();

router.delete("/delete/:id",  idValidation, validate, authenticateToken, deleteSubject)