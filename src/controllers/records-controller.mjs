import RecordRepository from "../repositories/record-repository.mjs";

export const listAllRecords = async (req, res) => {
    
    const records = await new RecordRepository().listAll();
    res.status(200).json({ success:true, statusCode: 200, data: records });
}