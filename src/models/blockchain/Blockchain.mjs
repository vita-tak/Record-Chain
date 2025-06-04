import Block from "../blocks/Block.mjs";


export default class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }

    addBlock(data) {
        const newBlock = Block.createBlock({
            previousBlock: this.chain.at(-1),
            data
        });

        this.chain.push(newBlock);
    }
}
