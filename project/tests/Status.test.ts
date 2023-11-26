import { describe, it, expect } from 'vitest';
import { Status } from "../src/lib/Tour";

describe('Status enum tests', () => {
    it('Status enum should have correct number of types', () => {
        const numberOfStatusTypes = 4;
        expect(Object.keys(Status).length / 2).to.equal(numberOfStatusTypes);
    });

    it('Status enum should have correct types', () => {
        expect(Status.NotLoggedIn).to.equal(0);
        expect(Status.User).to.equal(2);
        expect(Status.Guide).to.equal(2);
        expect(Status.Admin).to.equal(3);
    });

    it('Status enum should convert from number to string correctly', () => {
        expect(Status[Status.NotLoggedIn]).to.equal('NotLoggedIn');
        expect(Status[Status.User]).to.equal('User');
        expect(Status[Status.Guide]).to.equal('Guide');
        expect(Status[Status.Admin]).to.equal('Admin');
    });
});
