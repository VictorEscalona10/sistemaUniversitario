import express from "express";
import { router as registerAdminRoutes } from "./routes/auth/registerAdmin.routes.js";

export const app = express();

app.use(express.json());

app.use(registerAdminRoutes);

