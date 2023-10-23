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
  caseWrongId: [{ id: [1], parent: 'root' }]
};

describe('TreeStore construction object', () => {
  it('Should construct tree node class exemplar when invoking constructor with aloved types', () => {
    expect(new TreeStore(items)).to.be.an.instanceof(
      TreeStore,
      'TreeStore constructor fail!'
    );
  });
  it('Should return all items in array', () => {
    expect(new TreeStore(items).getAll()).to.be.equal(
      items,
      'items have not to be changed'
    );
  });
  it('Should return item by id', () => {
    expect(new TreeStore(items).getItem(7)).to.be.equal(
      { id: 7, parent: 4, type: null },
      'wrong element returned with id'
    );
  });
  it('Should return array of childrens by id', () => {
    expect(new TreeStore(items).getChildren(5)).to.be.equal(
      [],
      'wrong children returned by id'
    );
  });
  it('Should return array of childrens by id', () => {
    expect(new TreeStore(items).getChildren(4)).to.be.equal(
      [
        { id: 7, parent: 4, type: null },
        { id: 8, parent: 4, type: null }
      ],
      'wrong children returned by id'
    );
  });
  it('Should return array of childrens by id', () => {
    expect(new TreeStore(items).getChildren(2)).to.be.equal(
      [
        { id: 4, parent: 2, type: 'test' },
        { id: 5, parent: 2, type: 'test' },
        { id: 6, parent: 2, type: 'test' }
      ],
      'wrong children returned by id'
    );
  });
  it('Should return array of childrens by id', () => {
    expect(new TreeStore(items).getAllChildren(2)).to.be.equal(
      [
        { id: 4, parent: 2, type: 'test' },
        { id: 5, parent: 2, type: 'test' },
        { id: 6, parent: 2, type: 'test' },
        { id: 7, parent: 4, type: null },
        { id: 8, parent: 4, type: null }
      ],
      'wrong childrens returned by id'
    );
  });
  it('Should return array of childrens by id', () => {
    expect(new TreeStore(items).getAllParents(2)).to.be.equal(
      [
        { id: 4, parent: 2, type: 'test' },
        { id: 2, parent: 1, type: 'test' },
        { id: 1, parent: 'root' }
      ],
      'wrong childrens returned by id'
    );
  });
});
