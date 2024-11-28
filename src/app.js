import express from "express";
import cookieParser from "cookie-parser";
import { router as registerAdminRoutes } from "./routes/auth/registerAdmin.routes.js";
import { router as loginAdminRoutes } from "./routes/auth/loginAdmin.routes.js";


import { router as addCarreraRoutes } from "./routes/carreras/addCarrera.routes.js";
import {router as carrerasRoutes} from "./routes/carreras/carrera.routes.js"
import { router as updateCarreraRoutes } from "./routes/carreras/updateCarrera.routes.js";
import { router as deleteCarreraRoutes } from "./routes/carreras/deleteCarrera.routes.js";

export const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/admin", registerAdminRoutes, loginAdminRoutes);
app.use("/carreras", addCarreraRoutes, carrerasRoutes, updateCarreraRoutes, deleteCarreraRoutes);

