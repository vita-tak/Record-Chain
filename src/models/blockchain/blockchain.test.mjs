import Blockchain from "./Blockchain.mjs";
import Block from "../blocks/Block.mjs";
import { describe, beforeEach, expect, it } from "vitest";

describe("Blockchain", () => {
    let blockchain, blockchain_2, originalChain;

    beforeEach(() => {
        blockchain = new Blockchain();
        blockchain_2 = new Blockchain();
        originalChain = blockchain.chain;
    })

    it('should contain an array of blocks', () => {
        expect(blockchain.chain instanceof Array).toBeTruthy();
    })
})
