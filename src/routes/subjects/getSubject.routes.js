import { Router } from "express";
import { getSubject } from "../../controller/subjects/getSubject.controller.js";

export const router = Router();

router.get("/", getSubject);