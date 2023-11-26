import { describe, it, expect } from 'vitest';
import { getTourById} from "../src/lib/Tour";
import type { Tour } from '../src/lib/Tour';

describe('Tour tests', () => {
    it('getTourById should return correct tour for valid id', () => {
        // Assuming tours array and a valid id
        const validId = 0;
        const expectedTour: Tour = 
        {
            "id": 0,
            "date": "2020-01-01",
            "time": "12:00",
            "location": "Sarpsborg 08 stadion",
            "title": "En tur på stadion",
            "description": "Denne turen tar deg med på en tur koselig tur på stadion. Her får du se alt fra garderobene til VIP-rommet.",
            "price": 200,
            "spots": 10,
            "spotsLeft": 10,
            "guide": "Ola Nordmann"
        }
        expect(getTourById(validId)).toEqual(expectedTour);
    });

    it('getTourById should return undefined for invalid id', () => {
        const invalidId = 999;
        expect(getTourById(invalidId)).toBeUndefined();
    });
});