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

    it('should start with the genesis block', () => {
        expect(blockchain.chain.at(0)).toEqual(Block.genesis());
    })
})
