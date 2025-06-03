import express from "express";
import { listAllRecords, findById, addRecord } from "../controllers/records-controller.mjs";

const router = express.Router();

router.route("/").get(listAllRecords).post(addRecord);
router.route("/:id").get(findById);


export default router;