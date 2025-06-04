import { describe, expect, it } from "vitest";
import { generateHash } from "./hash-generator.mjs";

describe('createHash', () => {
    it('should generate a SHA-256 hash as output', () => {
        expect(generateHash('hash')).toEqual(
            'afb7c1f78d01251dcc47e5cf4b534de1221f70e408dca63475664424e3f3870c'
        )
    })

    it('should generate the same output with the same input regardless of order', () => {
        expect(generateHash('hash', 'tomte')).toEqual(generateHash('tomte', 'hash'));
    })
})