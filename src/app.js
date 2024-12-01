import express from "express";
import cookieParser from "cookie-parser";
import { router as registerAdminRoutes } from "./routes/auth/registerAdmin.routes.js";
import { router as loginAdminRoutes } from "./routes/auth/loginAdmin.routes.js";

import { router as addCarreraRoutes } from "./routes/carreras/addCarrera.routes.js";
import {router as carrerasRoutes} from "./routes/carreras/getCarrera.routes.js"
import { router as updateCarreraRoutes } from "./routes/carreras/updateCarrera.routes.js";
import { router as deleteCarreraRoutes } from "./routes/carreras/deleteCarrera.routes.js";
import { router as getSubjectsCarreraRoutes } from "./routes/carreras/getSubjectsCarrera.routes.js";

import { router as addSubjectRoutes } from "./routes/subjects/addSubject.routes.js";
import { router as getSubjectRoutes } from "./routes/subjects/getSubject.routes.js";
import { router as updateSubjectRoutes } from "./routes/subjects/updateSubject.routes.js";
import { router as deleteSubjectRoutes } from "./routes/subjects/deleteSubject.routes.js";

import {router as registerStudentRoutes} from "./routes/students/registerStudent.routes.js"
import {router as getStudentsRoutes} from "./routes/students/getStudents.routes.js"
import {router as updateStudentRoutes} from "./routes/students/updateStudent.routes.js"
import {router as deleteStudentRoutes} from "./routes/students/deleteStudent.routes.js"

import { router as registerTeacherRoutes } from "./routes/teachers/registerTeacher.routes.js";
import { router as getTeachersRoutes } from "./routes/teachers/getTechars.routes.js";

export const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => res.send("Bienvenido!"));
app.use("/admin", registerAdminRoutes, loginAdminRoutes);
app.use("/carreras", addCarreraRoutes, carrerasRoutes, updateCarreraRoutes, deleteCarreraRoutes, getSubjectsCarreraRoutes);
app.use("/subjects", addSubjectRoutes, getSubjectRoutes, updateSubjectRoutes, deleteSubjectRoutes);
app.use("/students", registerStudentRoutes, updateStudentRoutes, getStudentsRoutes, deleteStudentRoutes);
app.use("/teachers", registerTeacherRoutes, getTeachersRoutes);


