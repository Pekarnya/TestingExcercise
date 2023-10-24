type TreeNode = {
  id: number | string;
  parent: number | string;
  type?: string | null;
};

export default class TreeStore {
  private tree: Array<TreeNode>;
  private itemsSet: Map<number | string, object>;
  private itemsChildrens: Map<number | string, Array<TreeNode>>;
  constructor(items: Array<TreeNode>) {
    this.tree = items;
    this.itemsSet = new Map();
    this.itemsChildrens = new Map();
    this.fillSet();
  }
  private fillSet(): void {
    this.tree.forEach((item) => {
      this.itemsSet.set(item.id, item);
      if (item.parent == 'root') {
        const rootChildren = this.itemsChildrens.get('root') || [];
        rootChildren.push(item);
        this.itemsChildrens.set('root', rootChildren);
      } else {
        const parrentChildren = this.itemsChildrens.get(item.parent) || [];
        parrentChildren.push(item);
        this.itemsChildrens.set(item.parent, parrentChildren);
      }
    });
  }

  getAll(): Array<TreeNode> {
    return this.tree;
  }

  getItem(id: number | string): TreeNode {
    return this.itemsSet.get(id) as TreeNode;
  }

  getChildren(id: number | string): Array<TreeNode> | [] {
    return this.itemsChildrens.has(id)
      ? (this.itemsChildrens.get(id) as Array<TreeNode>)
      : [];
  }

  getAllChildren(id: number | string): Array<TreeNode> | [] {
    const childs = this.itemsChildrens.get(id) || [];
    let childrensDeep: Array<TreeNode> = [];
    childs.forEach((child) => {
      childrensDeep.push(child);
      childrensDeep = childrensDeep.concat(this.getAllChildren(child.id));
    });
    return childrensDeep;
  }

  getAllParents(id: number | string): Array<TreeNode> | [] {
    const node: TreeNode = this.itemsSet.get(id) as TreeNode;
    let parents: Array<TreeNode> = [];
    if (node && node.parent !== 'root') {
      const parent: TreeNode = this.itemsSet.get(node.parent) as TreeNode;
      if (parent) {
        parents.push(parent);
        parents = parents.concat(this.getAllParents(parent.id));
      }
    }
    return parents;
  }
}
