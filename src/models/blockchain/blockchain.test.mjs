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

    describe('Blockchain.isValid()', () => {
        describe('when the chain does not start with the genesis block', () => {
            it('should return false', () => {
                blockchain.chain[0] = "strange-block";
                expect(Blockchain.isValid(blockchain.chain)).toBeFalsy();
            })
        })

        describe('when the chain starts with the genesis block and has multiple blocks', () => {
            beforeEach(() => {
                blockchain.addBlock({ data: 'data' });
                blockchain.addBlock({ data: 'data2' });
                blockchain.addBlock({ data: 'data3' });
                blockchain.addBlock({ data: 'data4' });
            })

            describe('and a previousHash is modified', () => {
                it('should return false', () => {
                blockchain.chain.at(2).previousHash = 'Whoops!';
                expect(Blockchain.isValid(blockchain.chain)).toBeFalsy();
                })
            })

            describe('and a block contains invalid data', () => {
                it('should return false', () => {
                    blockchain.chain.at(1).data = 'You have been breached';
                    expect(Blockchain.isValid(blockchain.chain)).toBeFalsy();
                })
            })

            describe('and all blocks are valid', () => {
                it('should return true', () => {
                    expect(Blockchain.isValid(blockchain.chain)).toBeTruthy();
                })
            })



        })
    })

    describe('Blockchain.replaceChain()', () => {
        describe('when the new chain is not longer than the current one', () => {
            it('should not replace the chain', () => {
                blockchain_2.chain[0] = {data: "New data in block" };

                blockchain.replaceChain(blockchain_2.chain);
                expect(blockchain.chain).toEqual(originalChain);
            })
        })

        describe('when the new chain is longer than the current one', () => {
            beforeEach(() => {
                blockchain_2.addBlock({ data: 'data' });
                blockchain_2.addBlock({ data: 'data2' });
                blockchain_2.addBlock({ data: 'data3' });
                blockchain_2.addBlock({ data: 'data4' });
            })

            describe('but is invalid', () => {
                it('should not replace the chain', () => {
                    blockchain_2.chain[1].hash = 'You have been breached!';
                    blockchain.replaceChain(blockchain_2.chain);

                    expect(blockchain.chain).toEqual(originalChain);
                })
            });

            describe('and is valid', () => {
                beforeEach(() => {
                    blockchain.replaceChain(blockchain_2.chain);
                })
                it('should replace the chain', () => {
                    expect(blockchain.chain).toEqual(blockchain_2.chain);
                });
            });
        })
    })
})
