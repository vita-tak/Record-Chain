import { describe, expect, it, beforeEach } from "vitest";
import Block from "./Block.mjs";
import { GENESIS_BLOCK } from "./genesisBlock.mjs";
import { generateHash } from "../../utilities/hash-generator.mjs";


describe("Block", () => {
    const timestamp = Date.now();
    const hash = "current-hash";
    const previousHash = "previous-hash";
    const data = [1,2,3,4];
    const difficulty = 3;
    const nonce = 1;
    const block = new Block({ timestamp, hash, previousHash, data, difficulty, nonce });

    describe("should have the correct block properties", () => {

        it("should have a timestamp property", () => {
            expect(block).toHaveProperty("timestamp");
        });

        it('should have a hash property', () => {
            expect(block).toHaveProperty('hash');
        });

        it('should have a previousHash property', () => {
            expect(block).toHaveProperty('previousHash');
        });

        it('should have a data property', () => {
            expect(block).toHaveProperty('data');
        });

        it('should have a difficulty property', () => {
            expect(block).toHaveProperty('difficulty');
        });

        it('should have a nonce property', () => {
            expect(block).toHaveProperty('nonce');
        });
    })

    describe('should have its properties correctly initialized',()=>{
        it('should initialize with a timestamp value', () => {
            expect(block.timestamp).not.toEqual(undefined);
        })

        it('should initialize with the correct hash value', () => {
            expect(block.hash).toEqual(hash);
        })

        it('should set previousHash from the previous block\'s hash', () => {
            expect(block.previousHash).toEqual(previousHash);
        })

        it('should set the data property correctly', () => {
            expect(block.data).toEqual(data);
        })

        it('should set the difficulty property correctly', () => {
            expect(block.difficulty).toEqual(difficulty);
        })

        it('should set the nonce property correctly', () => {
            expect(block.nonce).toEqual(nonce);
        })

        it('should return an instance of Block', () => {
            expect(block instanceof Block).toBeTruthy();
        });


    })

    describe('genesis function()', () => {
        const genesisBlock = Block.genesis();

        it('should return an instance of Block', () => {
            expect(genesisBlock instanceof Block).toBeTruthy();
        })

        it('should return the genesis block', () => {
            expect(genesisBlock).toMatchObject(GENESIS_BLOCK);
        });

    });

    describe('createBlock() function', () => {
     const previousBlock = Block.genesis();
     const data = [4,5,6,7,8];

     let createdBlock;
     let now;

     beforeEach(() => {
         now = Date.now();
         createdBlock = Block.createBlock({ previousBlock, data });
     })

     it('should return an instance of Block', () => {
        expect(createdBlock instanceof Block).toBeTruthy();
    })

    it('should set the previousHash to the hash of the previous block', () => {
        expect(createdBlock.previousHash).toEqual(previousBlock.hash);
    })

    it('should set the timestamp to a defined value', () => {
        expect(createdBlock.timestamp).not.toEqual(undefined);
    })

    it('should set the timestamp as a number', () => {
        expect(createdBlock.timestamp).toEqual(expect.any(Number));
    });

    it('should set the timestamp to current time (within 100ms of now)', () => {
        expect(createdBlock.timestamp).toBeGreaterThanOrEqual(now);
        expect(createdBlock.timestamp).toBeLessThanOrEqual(now + 100);
    });

    it('should set the data to the provided input', () => {
        expect(createdBlock.data).toEqual(data);
    })

    it('should create a valid SHA-256 hash based on the timestamp, previousHash and data', () => {
        expect(createdBlock.hash).toEqual(
            generateHash({
                timestamp: createdBlock.timestamp,
                previousHash: createdBlock.previousHash,
                data: createdBlock.data,
                nonce: createdBlock.nonce,
                difficulty: createdBlock.difficulty
            })
        );
    })

    it('produces a hash that differs from the previous block\'s hash', () => {
        expect(createdBlock.hash).not.toEqual(previousBlock.hash);
    }); 

    it('should create a hash on the difficulty level', () => {
        expect(createdBlock.hash.substring(0, createdBlock.difficulty)).toEqual(
            '0'.repeat(createdBlock.difficulty)
        );
    })

    it('should adjust the difficulty level', () => {
        const results = [
            previousBlock.difficulty + 1,
            previousBlock.difficulty - 1,
        ];

        expect(results.includes(createdBlock.difficulty)).toBe(true);
    })

    })

});
