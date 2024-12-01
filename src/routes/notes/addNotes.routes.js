import { Router } from "express";
import { addNotes } from "../../controller/notes/addNotes.controller.js";
import { authenticateToken } from "../../middlewares/verifyJWT.js";

export const router = Router();

router.post("/add", authenticateToken, addNotes);