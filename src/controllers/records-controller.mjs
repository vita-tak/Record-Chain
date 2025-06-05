import RecordRepository from "../repositories/record-repository.mjs";
import { catchErrorAsync } from "../utilities/catchErrorAsync.mjs";

export const listAllRecords = catchErrorAsync(async (req, res) => {
    const records = await new RecordRepository().listAll();
    res.status(200).json({ success:true, statusCode: 200, blocks: records});
});

export const findById = catchErrorAsync(async (req, res) => {
    const record = await new RecordRepository().findById(req.params.id);
    res.status(200).json({ success: true, statusCode: 200, block: record});
});

export const addRecord = catchErrorAsync(async (req, res) => {
    const record = await new RecordRepository().add(req.body);
    res.status(201).json({ success: true, statusCode: 201, block: record});
});