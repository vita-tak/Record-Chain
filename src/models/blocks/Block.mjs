import crypto from 'crypto';

export default class Block {
    constructor({ data, previousHash, hash, difficulty, nonce }) {
        this.id = crypto.randomUUID().replaceAll("-", "");
        this.timestamp = Date.now();
        this.data = data;
        this.previousHash = previousHash;
        this.hash = hash;
        this.difficulty = difficulty;
        this.nonce = nonce;
    }

    static genesis() {
        return new this(GENESIS_BLOCK);
    }

    static createBlock({ previousBlock, data }) {
        let timestamp, hash;
        const previousHash = previousBlock.hash;
        let { difficulty } = previousBlock;
        let nonce = 0;
}