import { body, validationResult } from 'express-validator';

export const validateStudent = [
  body('name')
    .notEmpty().withMessage('name is required')
    .isLength({ max: 100 }).withMessage('name must be at most 100 characters long'),
  body('lastName')
    .notEmpty().withMessage('lastName is required')
    .isLength({ max: 100 }).withMessage('Apellido must be at most 100 characters long'),
  body('identification')
    .notEmpty().withMessage('identification is required')
    .isLength({ max: 8 }).withMessage('identification must be at most 8 characters long')
    .isInt().withMessage('identification must be an integer'),
  body('idCarrera')
    .notEmpty().withMessage('idCarrera is required')
    .isInt().withMessage('idCarrera must be an integer')
    .isInt({ gt: 0 }).withMessage('idCarrera must be a positive integer')
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
