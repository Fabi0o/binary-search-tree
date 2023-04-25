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

  insert(n, curr = this.root) {
    if (curr.value == n) return;

    if (curr.value > n) {
      return curr.left ? this.insert(n, curr.left) : (curr.left = new Node(n));
    } else if (curr.value < n) {
      return curr.right
        ? this.insert(n, curr.right)
        : (curr.right = new Node(n));
    }
  }

  delete(n) {
    const node = this.find(n);
    const parentNode = this.#findParent(n);

    if (!node) return;

    if (!node.left && !node.right)
      parentNode.left.value == node.value
        ? (parentNode.left = null)
        : (parentNode.right = null);
    else if (node.left && node.right) return;
    else if (node.left)
      parentNode.left.value == node.value
        ? (parentNode.left = node.left)
        : (parentNode.right = node.left);
    else if (node.right)
      parentNode.left.value == node.value
        ? (parentNode.left = node.right)
        : (parentNode.right = node.right);
  }

  find(n, curr = this.root) {
    if (!curr) return null;

    if (curr.value > n) return this.find(n, curr.left);
    else if (curr.value < n) return this.find(n, curr.right);
    else if (curr.value == n) return curr;
  }

  #findParent(n, curr = this.root) {
    if (n == curr.value) return null;
    else if (n == curr.left.value || n == curr.right.value) return curr;

    if (curr.value > n) return this.#findParent(n, curr.left);
    else if (curr.value < n) return this.#findParent(n, curr.right);
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
