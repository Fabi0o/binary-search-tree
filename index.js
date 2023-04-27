import Tree from "./Tree.js";

const randomArray = (n) => {
  const nums = [];

  while (nums.length < n) {
    nums.push(Math.floor(Math.random() * 100) + 1);
  }
  return nums;
};

console.log("Generating random balanced binary search tree...");

const binaryTree = new Tree(randomArray(10));

binaryTree.print();
console.log(
  binaryTree.isBalanced()
    ? "The tree is balanced!"
    : "The tree is not balanced!"
);

console.log(`Level order: ${binaryTree.levelOrder()}`);
console.log(`Inorder: ${binaryTree.inOrder()}`);
console.log(`Preorder: ${binaryTree.preOrder()}`);
console.log(`Postorder: ${binaryTree.postOrder()}`);

console.log("Unbalancing the tree by adding random numbers to it...");
randomArray(100).forEach((num) => binaryTree.insert(num));
binaryTree.print();

console.log(
  binaryTree.isBalanced()
    ? "The tree is still balanced!"
    : "The tree is now not balanced!"
);

console.log("Balancing the tree...");
binaryTree.rebalance();
binaryTree.print();
console.log(
  binaryTree.isBalanced()
    ? "The tree is now balanced!"
    : "The tree is still not balanced!"
);

console.log(`Level order: ${binaryTree.levelOrder()}`);
console.log(`Inorder: ${binaryTree.inOrder()}`);
console.log(`Preorder: ${binaryTree.preOrder()}`);
console.log(`Postorder: ${binaryTree.postOrder()}`);
