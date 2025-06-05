
import crypto from "crypto";
import { blockchain } from "../server.mjs";
import AppError from "../models/error/appError.mjs";

export default class RecordRepository {
    
    async listAll() {
        return blockchain.chain;
    }

    async findById (id) {
        const record = blockchain.chain.find((block) => block.id === id);

        if(!record) 
            throw new AppError(`Did not find block with id: '${id}'`, 404);
        return record;
    }

    async add(record) {
        const {title, artist} = record;

        if (!title) throw new AppError("Title is required", 400);
        if (!artist) throw new AppError("Artist is required", 400);

        record.id = crypto.randomUUID().replaceAll("-", "");
        blockchain.addBlock({ data: record });
        return blockchain.chain;
    }
}