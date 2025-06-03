export default class RecordRepository {
    
    async listAll() {
        return "Success";
    }

    async findById (id) {
        return `Found record by id: '# ${id}'`;
    }

    async add(record) {
        return `Record ${record} added`;
    }
}