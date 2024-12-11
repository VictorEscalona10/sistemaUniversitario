import { body, param } from "express-validator";

export const nameValidation = [
  body("name")
    .notEmpty()
    .withMessage("name is required")
    .isLength({ max: 100 })
    .withMessage("name must be at most 100 characters long")
];

export const lastNameValidation = [
  body("lastName")
    .notEmpty()
    .withMessage("lastName is required")
    .isLength({ max: 100 })
    .withMessage("lastName must be at most 100 characters long")
];

export const identificationValidation = [
  body("identification")
    .notEmpty()
    .withMessage("identification is required")
    .isLength({ max: 8 })
    .withMessage("identification must be at most 8 characters long")
    .isInt()
    .withMessage("identification must be an integer")
];

export const idCarreraValidation = [
  body("idCarrera")
    .notEmpty()
    .withMessage("idCarrera is required")
    .isInt()
    .withMessage("idCarrera must be an integer")
    .isInt({ gt: 0 })
    .withMessage("idCarrera must be a positive integer")
];

export const anioValidation = [
  body("anio")
    .notEmpty()
    .withMessage("anio is required")
    .isInt()
    .withMessage("anio must be an integer")
    .isInt({ gt: 0 })
    .withMessage("anio must be a positive integer")
];

export const duracionValidation = [
  body("duracion")
    .notEmpty()
    .withMessage("duracion is required")
    .isInt()
    .withMessage("duracion must be an integer")
    .isInt({ gt: 0 })
    .withMessage("duracion must be a positive integer")
];

export const passwordValidation = [
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ max: 100 })
    .withMessage("password must be at most 100 characters long")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long")
];

export const emailValidation = [
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email must be a valid email")
];

export const idValidation = [
  param("id")
    .notEmpty()
    .withMessage("id is required")
    .isInt()
    .withMessage("id must be an integer")
    .isInt({ gt: 0 })
    .withMessage("id must be a positive integer")
];

export const idEstudianteValidation = [
  body("idEstudiante")
    .notEmpty()
    .withMessage("idEstudiante is required")
    .isInt()
    .withMessage("idEstudiante must be an integer")
    .isInt({ gt: 0 })
    .withMessage("idEstudiante must be a positive integer")
];

export const idMateriaValidation = [
  body("idMateria")
    .notEmpty()
    .withMessage("idMateria is required")
    .isInt()
    .withMessage("idMateria must be an integer")
    .isInt({ gt: 0 })
    .withMessage("idMateria must be a positive integer")
];

export const semestreValidation = [
  body("semestre")
    .notEmpty()
    .withMessage("semestre is required")
    .isInt()
    .withMessage("semestre must be an integer")
    .isInt({ gt: 0 })
    .withMessage("semestre must be a positive integer")
];

export const notaValidation = [
  body("nota")
    .notEmpty()
    .withMessage("nota is required")
    .isInt()
    .withMessage("nota must be an integer")
    .isInt({ gt: 0 })
    .withMessage("nota must be a positive integer")
    .isInt({ lt: 21 })
    .withMessage("nota must be less than 21")
];