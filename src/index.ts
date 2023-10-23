type TreeNode = {
  id: number | string;
  parent: number | null | undefined | string;
  type?: string | null;
};

export default class TreeStore {
  private tree: Array<TreeNode>;
  constructor(items: Array<TreeNode>) {
    this.tree = items;
  }
  getAll(): Array<TreeNode> {
    return this.tree;
  }

  getItem(id: number): number {
    return id;
  }

  getChildren(id: number): number {
    return id;
  }

  getAllChildren(id: number): number {
    return id;
  }

  getAllParents(id: number): number {
    return id;
  }
}

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
const treeNode = new TreeStore(items);
console.log(treeNode instanceof TreeStore);
