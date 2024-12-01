import { Router } from "express";
import { getTeachers } from "../../controller/teachers/getTeachers.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";

export const router = Router();

router.get("/", authenticateToken, getTeachers);