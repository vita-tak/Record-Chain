import Block from "../blocks/Block.mjs";


export default class Blockchain {
    constructor() {
        this.chain = [Block.genesis()];
    }

    addBlock(data) {}
}
