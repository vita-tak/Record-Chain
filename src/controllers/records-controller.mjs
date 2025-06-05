import RecordRepository from "../repositories/record-repository.mjs";
import JsonFileStorage from "../JsonFileStorage.mjs";
import { catchErrorAsync } from "../utilities/catchErrorAsync.mjs";

const recordStorage = new JsonFileStorage('data', 'records.json');

export const listAllRecords = catchErrorAsync(async (req, res) => {
    const records = await new RecordRepository().listAll();

    await recordStorage.writeToFile(JSON.stringify(records, null, 2));

    res.status(200).json({ success:true, statusCode: 200, blocks: records});
});

export const findById = catchErrorAsync(async (req, res) => {
    const record = await new RecordRepository().findById(req.params.id);
    res.status(200).json({ success: true, statusCode: 200, block: record});
});

export const addRecord = catchErrorAsync(async (req, res) => {
    const record = await new RecordRepository().add(req.body);

    const allRecords = await new RecordRepository().listAll();
    await recordStorage.writeToFile(JSON.stringify(allRecords, null, 2));

    res.status(201).json({ success: true, statusCode: 201, block: record});
});