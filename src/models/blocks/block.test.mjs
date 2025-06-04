import { describe, expect, it } from "vitest";
import Block from "./Block.mjs";
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


});
