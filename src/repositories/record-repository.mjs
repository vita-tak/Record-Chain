
import crypto from "crypto";
import { blockchain } from "../server.mjs";

export default class RecordRepository {
    
    async listAll() {
        return blockchain.chain;
    }

    async findById (id) {
        return blockchain.chain.find((block) => block.id === id);
    }

    async add(record) {
        record.id = crypto.randomUUID().replaceAll("-", "");
        blockchain.addBlock({ data: record });
        return blockchain.chain;
    }
}