import { describe, expect, it } from "vitest";
import Block from "./Block.mjs";

describe("Block", () => {
    const timestamp = Date.now();
    const block = new Block({ timestamp });

    describe("should have the correct block properties", () => {
        it("should have a timestamp property", () => {
            expect(block).toHaveProperty("timestamp");
        });
    })
});
