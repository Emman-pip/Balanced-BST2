const NodeFactory = (data = null, left = null, right = null) => {
  return { data, left, right };
};

const Tree = (arr) => {
  const buildTree = (arr) => {
    try {
      if (arr.length === 1 || arr.length === 0) {
        return NodeFactory(arr[0]);
      }
      const splitAt = Math.floor(arr.length / 2);

      const left = loop(0, splitAt, arr);
      const right = loop(splitAt + 1, arr.length, arr);
      return NodeFactory(arr[splitAt], buildTree(left), buildTree(right));
    } catch (e) {
      //   console.log(e);
    }
  };

  const loop = (start, end, arrOld, arrNew = []) => {
    for (i = start; i < end; i++) {
      arrNew.push(arrOld[i]);
    }
    return arrNew;
  };

  const sortArr = (arr) => {
    try {
      const newArray = [];
      for (let i = 0; i < arr.length; i++) {
        if (newArray.includes(arr[i])) continue;
        newArray.push(arr[i]);
      }
      return newArray.sort((a, b) => a - b);
    } catch (e) {
      //   console.log(e);
    }
  };

  const root = buildTree(sortArr(arr));

  const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null || node.right === null || node.left === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };
  return { root, prettyPrint };
};

(() => {
  const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
  const array2 = [1, 2, 4, 5, 3];
  const treeDataa = Tree(array).root;
  console.log(treeDataa);
  Tree().prettyPrint(treeDataa);
})();
