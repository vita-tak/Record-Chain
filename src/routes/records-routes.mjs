import express from "express";
import { listAllRecords } from "../controllers/records-controller.mjs";

const router = express.Router();

router.route("/").get(listAllRecords);


export default router;