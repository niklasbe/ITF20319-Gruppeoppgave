import { describe, it, expect } from 'vitest';
import { getTourById } from "../src/lib/Tour";

describe('Tour tests', () => {
    it('getTourById should return undefined for invalid id', () => {
        const invalidId = 999;
        expect(getTourById(invalidId)).toBeUndefined();
    });
});