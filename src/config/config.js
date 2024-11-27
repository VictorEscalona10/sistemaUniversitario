import { configDotenv } from "dotenv";

configDotenv();

export const PORT = process.env.PORT;
export const JWT_SECRET = process.env.JWT_SECRET;
export const SALT = process.env.SALT;
