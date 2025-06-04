import crypto from 'crypto';
import { GENESIS_BLOCK } from './genesisBlock.mjs';
import { MINE_RATE } from '../../utilities/block-config.mjs';
import { generateHash } from '../../utilities/hash-generator.mjs';

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

        do{
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty({
                block: previousBlock,
                timestamp
            });
            hash = generateHash({ timestamp, previousHash, data, nonce, difficulty });
        } while (hash.substring(0, difficulty) !== '0'.repeat(difficulty));

        return new this({
            hash,
            previousHash,
            data,
            nonce,
            difficulty
        });
    }

    static adjustDifficulty({ block, timestamp }) {
        const { difficulty } = block;

        if(difficulty < 1) return 1;

        if(timestamp - block.timestamp > MINE_RATE){
            return difficulty - 1;
        }

        return difficulty + 1;
    }
}