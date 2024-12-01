import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

export const authenticateToken = (req, res, next) => {
  if (!req.cookies) {
    return res.status(401).json({ message: "Access denied" });
  }

  const token = req.cookies.authToken;

  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    } else {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};
