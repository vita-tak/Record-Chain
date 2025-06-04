
import crypto from "crypto";
import { blockchain } from "../server.mjs";

export default class RecordRepository {
    
    async listAll() {
        // const response = await fetch("http://localhost:3000/records")
        // if (response.ok) {
        //     const records = await response.json();
        //     return records;
        // } else {
        //     return response.status;
        // }
    }

    async findById (id) {
        // const response = await fetch(`http://localhost:3000/records/${id}`)
        // if (response.ok) {
        //     const record = await response.json();
        //     return record;
        // } else {
        //     return response.status;
        // }
    }

    async add(record) {
        record.id = crypto.randomUUID().replaceAll("-", "");
        blockchain.addBlock({ data: record });
        return blockchain;


        // const response = await fetch("http://localhost:3000/records", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(record)
        // })

        // if (response) {
        //     const record = await response.json();
        //     return record;
        // } else {
        //     return response.status;
        // }
    }
}