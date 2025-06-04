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

    it('should add a new block to the chain', () => {
        const data = 'data';
        blockchain.addBlock(data);
        expect(blockchain.chain.at(-1).data).toEqual(data);
    })

    describe('isValid() chain', () => {
        describe('the genesis block is missing or is not the first block in the chain', () => {
            it('should return false', () => {
                blockchain.chain[0] = "strange-block";
                expect(Blockchain.isValid(blockchain.chain)).toBeFalsy();
            })
        })

        describe('when the chain starts with the genesis block and consist of multiple blocks', () => {
            beforeEach(() => {
                blockchain.addBlock({ data: 'data' });
                blockchain.addBlock({ data: 'data2' });
                blockchain.addBlock({ data: 'data3' });
                blockchain.addBlock({ data: 'data4' });
            })

            describe('and the previousHash has changed', () => {
                it('should return false', () => {
                blockchain.chain.at(2).previousHash = 'Whoops!';
                expect(Blockchain.isValid(blockchain.chain)).toBeFalsy();
                })
            })

            describe('and the chain contains a block with invalid information', () => {
                it('should return false', () => {
                    blockchain.chain.at(1).data = 'You have been breached';
                    expect(Blockchain.isValid(blockchain.chain)).toBeFalsy();
                })
            })

            describe('and the chain does not contain any invalid blocks', () => {
                it('returns true', () => {
                    expect(Blockchain.isValid(blockchain.chain)).toBeTruthy();
                })
            })



        })
    })
});
