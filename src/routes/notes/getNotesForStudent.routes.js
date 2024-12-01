import { Router } from "express";
import { getNotesForStudent } from "../../controller/notes/getNotesForStudent.controller.js";

export const router = Router();

router.post("/student", getNotesForStudent);