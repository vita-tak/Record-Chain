
import crypto from "crypto";
import { blockchain } from "../server.mjs";
import AppError from "../models/error/appError.mjs";

export default class RecordRepository {
    
    async listAll() {

        return blockchain.chain;
    }

    async findById (id) {
        return blockchain.chain.find((block) => block.id === id);
    }

    async add(record) {
        const {title, artist, genre, formats} = record;

        if (!title) throw new AppError("Title is required", 400);

        record.id = crypto.randomUUID().replaceAll("-", "");
        blockchain.addBlock({ data: record });
        return blockchain.chain;
    }
}