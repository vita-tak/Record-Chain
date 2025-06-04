import Blockchain from "../models/blockchain/Blockchain.mjs";

const blockchain = new Blockchain();
const times = [];
let previousTime, nextTime, nextBlock, timeDiff, avarage, hash;

for (let i = 0; i < 10000; i++) {
    previousTime = blockchain.chain.at(-1).timestamp;

    blockchain.addBlock({ data: `Test block ${i}` })

    nextBlock = blockchain.chain.at(-1);
    nextTime = nextBlock.timestamp;
    hash = nextBlock.hash;

    timeDiff = nextTime - previousTime;
    times.push(timeDiff);

    avarage = times.reduce((sum, value) => sum + value) / times.length;

    console.log(
        `Time it took to mine a block: Blocknr: ${
            i+1
        }. Time it took: ${timeDiff}ms. Difficulty: ${
            nextBlock.difficulty
        }. Hash: ${hash}. Avarage time: ${avarage.toFixed(2)}ms.`
    );
}