import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/config.js';

export const authenticateToken = (req, res, next) => {
  const token = req.cookies.authToken;

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};
