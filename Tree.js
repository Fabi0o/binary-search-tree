import mergeSort from "./mergeSort.js";
import Node from "./Node.js";

export default class Tree {
  constructor(arr) {
    this.root = buildTree(mergeSort(arr));
  }

  print(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.print(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
    if (node.left !== null) {
      this.print(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }
}

const buildTree = (arr) => {
  if (arr.length == 1) return new Node(arr[0]);
  if (!arr[0]) return null;

  const mid = Math.floor(arr.length / 2);

  return new Node(
    arr[mid],
    buildTree(arr.slice(0, mid)),
    buildTree(arr.slice(mid + 1))
  );
};
