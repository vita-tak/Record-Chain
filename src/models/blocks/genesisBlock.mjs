import { INITIAL_DIFFICULTY } from "../../utilities/block-config.mjs";

export const GENESIS_BLOCK = {
    id: 'genesis-block-id',
    timestamp: 1,
    hash: '#1',
    data: [],
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    previousHash: '----'
};