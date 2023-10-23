// tests/index.spec.tx
import { assert, expect } from 'chai';
import TreeStore from '../index';
import { it } from 'mocha';

const items = [
    { id: 1, parent: 'root' },
    { id: 2, parent: 1, type: 'test' },
    { id: 3, parent: 1, type: 'test' },

    { id: 4, parent: 2, type: 'test' },
    { id: 5, parent: 2, type: 'test' },
    { id: 6, parent: 2, type: 'test' },

    { id: 7, parent: 4, type: null },
    { id: 8, parent: 4, type: null }
];

const itemsCases = {
    caseOne: [
        { id: 1, parent: 'root' },
        { id: 2, parent: 1, type: 'test' },
        { id: 3, parent: 1, type: 'test' },

        { id: 4, parent: 2, type: 'test' },
        { id: 5, parent: 2, type: 'test' },
        { id: 6, parent: 2, type: 'test' },

        { id: 7, parent: 4, type: null },
        { id: 8, parent: 4, type: null }
    ],
    caseWrongId: [
        { id: [1], parent: 'root' },
    ]
};

describe('TreeStore construction object', () => {
    it('Should construct tree node class exemplar when invoking constructor with aloved types', () => {
        expect(new TreeStore(items))
            .to
            .be.an.instanceof(TreeStore, 'TreeStore constructor fail!',);
    });
    it('Should throw an error on wrong type', () => {
        expect(new TreeStore(itemsCases.caseWrongId))
            .to
            .throw(TypeError);
    });
});
