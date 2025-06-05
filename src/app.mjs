import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "./config/settings.env" });

const app = express();

app.use(express.json());

export { app };