import RecordRepository from "../repositories/record-repository.mjs";

export const listAllRecords = async (req, res) => {

    const records = await new RecordRepository().listAll();
    res.status(200).json({ success:true, statusCode: 200, blocks: records, message: "All records found successfully" });
}

export const findById = async (req, res) => {
    const record = await new RecordRepository().findById(req.params.id);
    res.status(200).json({ success: true, statusCode: 200, block: record, message: "Record found successfully" });
}

export const addRecord = async (req, res) => {
    const record = await new RecordRepository().add(req.body);
    res.status(201).json({ success: true, statusCode: 201, block: record, message: "Record added successfully" });
}